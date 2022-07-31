from dataclasses import dataclass
import json
import logging
import os
import psutil
import sys
import eel


@dataclass
class main_data:
    # Path to this .exe / .py file
    path_to_file: str


def find_path():
    """
    Finding the path to this the .exe / .py file.

    If the program is frozen, find the process name and get the current working directory. If the
    program is not frozen, get the current working directory.

    """
    if getattr(sys, 'frozen', False):
        proc_name = "Writer's Assistant.exe"
        for proc in psutil.process_iter():
            try:
                proc_name_in_loop = proc.name()
            except psutil.NoSuchProcess:
                pass
            else:
                if proc_name_in_loop == proc_name:
                    proc.cwd()
                    path_folder.path_to_file = proc.cwd()
    elif __file__:
        path_folder.path_to_file = f'{os.path.dirname(os.path.realpath(__file__))}'


def start():
    """
    It starts the web server and opens the main.html page in fullscreen mode

    """
    eel.init(f'{os.path.dirname(os.path.realpath(__file__))}/web')
    try:
        eel.start('pages/main.html',
                   mode='chrome',
                   port=9012,
                   cmdline_args=['--start-fullscreen', '--disable-extensions'])
    except:
        eel.start('pages/main.html',
                   mode='default',
                   port=9012,)


def make_folder_for_saves():
    """
    If the folder "saves" doesn't exist in the path, create it

    """
    try:
        data = path_folder.path_to_file
        if os.path.exists(f'{data}/saves') != True:
            os.mkdir(f'{data}/saves')
    except:
        notification("❌ An unexpected error has occurred. Check file: main.log")
        log_func.exception("Error in save_text()")


@eel.expose
def save_text(data_value: list, data_key: list, file_name: str):
    """
    It takes a list of values and a list of keys, and saves them as a json file.

    Args:
        data_value (list): list of values
        data_key (list): list of key
        file_name (str): name of the file to save

    """
    try:
        data = path_folder.path_to_file
        data_for_save = dict(zip(data_key, data_value))
        with open(f"{data}/saves/{file_name}", "w", encoding='utf-8') as file:
            json.dump(data_for_save, file, indent=6, ensure_ascii=False)
            notification(" ✔ File created successfully")
    except:
        notification("❌ An unexpected error has occurred. Check file: main.log")
        log_func.exception("Error in save_text()")


@eel.expose
def load_text(file_name: str, custom_file = ""):
    """
    If the file exists, open it and load the data into the eel.load_save() function.

    Args:
        file_name (str): the name of the file to be downloaded by default
        custom_file (str, optional): custom file name for download

    """
    try:
        data = path_folder.path_to_file
        try:
            if custom_file != "":
                    with open(f"{data}/saves/{custom_file}", "r", encoding='utf-8') as file:
                        data_for_load = json.load(file)
                        eel.load_save(data_for_load)
            elif custom_file == "":
                with open(f"{data}/saves/{file_name}", "r", encoding='utf-8') as file:
                    data_for_load = json.load(file)
                    eel.load_save(data_for_load)
        except FileNotFoundError:
            notification("❌ File not found. Check save folder")
    except:
        notification("❌ An unexpected error has occurred. Check file: main.log")
        log_func.exception("Error in load_text()")


@eel.expose
def delete_file(file_name: str):
    """
    It deletes a file from the folder "saves" in the same directory as the script

    Args:
        file_name (str): file name to delete
    """
    try:
        try:
            os.remove(f"{path_folder.path_to_file}/saves/{file_name}")
            notification(" ✔ File created successfully")
        except FileNotFoundError:
            notification("❌ File not found. Check save folder")
    except:
        notification("❌ An unexpected error has occurred. Check file: main.log")
        log_func.exception("Error in delete_file()")


@eel.expose
def open_folder():
    """It opens the folder where the save files are stored"""
    os.system(f"explorer.exe {path_folder.path_to_file}\saves ")


def notification(message: str):
    """
    This function takes a string as an argument, the notification text and calls the corresponding
    function in JS using the eel library. That, in turn, using alert(message), shows the text on the 
    user's screen.

    Args:
        message (str): notification text

    """
    eel.notification(message)


@eel.expose
def close_programm():
    """It closes the programm."""
    os.system("taskkill /im chrome.exe")


if __name__ == "__main__":
# The main function of the program. It starts the web server and opens the main.html page in
# fullscreen mode.
    try:
        path_folder = main_data("")
        find_path()
        make_folder_for_saves()
        logging.basicConfig(level=logging.WARNING,
                            filename=os.path.join(path_folder.path_to_file, 'main.log'),
                            filemode='a',
                            format='%(name)s - %(levelname)s - %(message)s - %(asctime)s',
                            encoding="utf_8")
        log_func = logging.getLogger("function error")
        start()
    except:
        log_func.exception("Error on startup")