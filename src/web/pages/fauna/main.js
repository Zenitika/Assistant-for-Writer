// ----------------------- CUSTOMIZING THE OPERATION OF THE TEXT EDITOR BUTTONS

function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    if (sCmd === "insertText") {
        document.execCommand(sCmd, false, "    ");
    }
}
// ----------------------- STARTING THE OTHER FUNCTIONS -----------------------
window.onload = function () {
    // ----------------------- LOADING THE LAST JOB -----------------------
    if (localStorage.getItem('text_in_fname_fauna') !== null) {
        document
            .getElementById('fname_fauna')
            .innerHTML = localStorage.getItem('text_in_fname_fauna');
    }
    if (localStorage.getItem('text_in_sname_fauna') !== null) {
        document
            .getElementById('sname_fauna')
            .innerHTML = localStorage.getItem('text_in_sname_fauna');
    }
    if (localStorage.getItem('text_in_main_info_fauna') !== null) {
        document
            .getElementById('main_info_fauna')
            .innerHTML = localStorage.getItem('text_in_main_info_fauna');
    }
    if (localStorage.getItem('text_in_second_info_fauna') !== null) {
        document
            .getElementById('second_info_fauna')
            .innerHTML = localStorage.getItem('text_in_second_info_fauna');
    }
    if (localStorage.getItem('text_in_look_fauna') !== null) {
        document
            .getElementById('look_fauna')
            .innerHTML = localStorage.getItem('text_in_look_fauna');
    }
    if (localStorage.getItem('text_in_personality_fauna') !== null) {
        document
            .getElementById('personality_fauna')
            .innerHTML = localStorage.getItem('text_in_personality_fauna');
    }
    if (localStorage.getItem('text_in_freandship_fauna') !== null) {
        document
            .getElementById('freandship_fauna')
            .innerHTML = localStorage.getItem('text_in_freandship_fauna');
    }
    if (localStorage.getItem('text_in_history_fauna') !== null) {
        document
            .getElementById('history_fauna')
            .innerHTML = localStorage.getItem('text_in_history_fauna');
    }
    if (localStorage.getItem('text_in_futher_fauna') !== null) {
        document
            .getElementById('futher_fauna')
            .innerHTML = localStorage.getItem('text_in_futher_fauna');
    }
    if (localStorage.getItem('text_in_notes_fauna') !== null) {
        document
            .getElementById('notes_fauna')
            .innerHTML = localStorage.getItem('text_in_notes_fauna');
    }

    // Track each keystroke and execute the command on each keystroke
    document.addEventListener('keydown', function (e) {
        if (e["key"] === "Tab") {
            formatDoc("insertText", "")
        }
        // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_fname_fauna',
            document.getElementById('fname_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_fauna',
            document.getElementById('sname_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_fauna',
            document.getElementById('main_info_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_look_fauna',
            document.getElementById('look_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_fauna',
            document.getElementById('freandship_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_history_fauna',
            document.getElementById('history_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_fauna',
            document.getElementById('personality_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_fauna',
            document.getElementById('futher_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_fauna',
            document.getElementById('notes_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_fauna',
            document.getElementById('second_info_fauna').innerHTML
        );
    });
    // ----------------------- LOGIC OF NAVIGATION BUTTONS AND APP CONTROL
    // Back button
    let btn_back = document.querySelector("#back");
    btn_back.addEventListener("click", back);
    async function back() {
        window.location.href = "../main.html";
    }
    // Delete a file
    let btn_delete_file = document.querySelector("#delete_file");
    btn_delete_file.addEventListener("click", delete_file);
    async function delete_file() {
        data = prompt("File name:", "example.json")
        if (data !== null)
            await eel.delete_file(data);
        }
    // Clearing fields
    let btn_remove_text_in_fields = document.querySelector(
        "#remove_text_in_fields"
    );
    btn_remove_text_in_fields.addEventListener("click", remove_text_in_fields);
    async function remove_text_in_fields() {
        // Resetting the contents of the fields
        document
            .getElementById('fname_fauna')
            .innerHTML = '';
        document
            .getElementById('sname_fauna')
            .innerHTML = '';
        document
            .getElementById('main_info_fauna')
            .innerHTML = '';
        document
            .getElementById('second_info_fauna')
            .innerHTML = '';
        document
            .getElementById('look_fauna')
            .innerHTML = '';
        document
            .getElementById('personality_fauna')
            .innerHTML = '';
        document
            .getElementById('freandship_fauna')
            .innerHTML = '';
        document
            .getElementById('history_fauna')
            .innerHTML = '';
        document
            .getElementById('futher_fauna')
            .innerHTML = '';
        document
            .getElementById('notes_fauna')
            .innerHTML = '';
    }
    // Open save folder
    let btn_open_folder = document.querySelector("#open_folder")
    btn_open_folder.addEventListener("click", open_folder)
    async function open_folder() {
        await eel.open_folder()
    }
    // Close program
    let btn_ex = document.querySelector('#btn_ex');
    btn_ex.addEventListener("click", close_programm);
    async function close_programm() {
        await eel.close_programm();
    }
    // ------ BUTTONS TO SAVE DATA ------
    // Saving data from fields to the browser storage and to a save file with a user-specified name
    let btn_save_save_us = document.querySelector("#save_us");
    btn_save_save_us.addEventListener("click", save_us_text);
    async function save_us_text() {
        let result = prompt("Имя файла:", "example.json");
        save_text(result)
    }
    // Saving data from fields to the browser storage and to the default save file
    let btn_save = document.querySelector("#save");
    btn_save.addEventListener("click", () => save_text("data_fauna.json"));
    async function save_text(file_name) {
        // Store values ​​in browser storage
        localStorage.setItem(
            'text_in_fname_fauna',
            document.getElementById('fname_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_fauna',
            document.getElementById('sname_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_fauna',
            document.getElementById('main_info_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_look_fauna',
            document.getElementById('look_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_fauna',
            document.getElementById('freandship_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_history_fauna',
            document.getElementById('history_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_fauna',
            document.getElementById('personality_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_fauna',
            document.getElementById('futher_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_fauna',
            document.getElementById('notes_fauna').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_fauna',
            document.getElementById('second_info_fauna').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('fname_fauna')
                .innerHTML = localStorage.getItem('text_in_fname_fauna'),
            document
                .getElementById('sname_fauna')
                .innerHTML = localStorage.getItem('text_in_sname_fauna'),
            document
                .getElementById('main_info_fauna')
                .innerHTML = localStorage.getItem('text_in_main_info_fauna'),
            document
                .getElementById('second_info_fauna')
                .innerHTML = localStorage.getItem('text_in_second_info_fauna'),
            document
                .getElementById('look_fauna')
                .innerHTML = localStorage.getItem('text_in_look_fauna'),
            document
                .getElementById('personality_fauna')
                .innerHTML = localStorage.getItem('text_in_personality_fauna'),
            document
                .getElementById('freandship_fauna')
                .innerHTML = localStorage.getItem('text_in_freandship_fauna'),
            document
                .getElementById('history_fauna')
                .innerHTML = localStorage.getItem('text_in_history_fauna'),
            document
                .getElementById('futher_fauna')
                .innerHTML = localStorage.getItem('text_in_futher_fauna'),
            document
                .getElementById('notes_fauna')
                .innerHTML = localStorage.getItem('text_in_notes_fauna')
        ]
        let data_key = [
            'fname_fauna',
            'sname_fauna',
            'main_info_fauna',
            'second_info_fauna',
            'look_fauna',
            'personality_fauna',
            'freandship_fauna',
            'history_fauna',
            'futher_fauna',
            'notes_fauna'
        ]
        await eel.save_text(data_value, data_key, file_name);
    }
    // ------ BUTTONS TO LOAD A SAVE ------
    // Loading a save from the default file
    let btn = document.querySelector("#save_load");
    btn.addEventListener("click", load_text);
    async function load_text() {
        await eel.load_text("data_world_or_location.json");
    }
    // Loading a save from a custom file
    let btn_custom_file = document.querySelector("#open_file");
    btn_custom_file.addEventListener("click", open_file);
    async function open_file() {
        let result = prompt("File name:", "example.json");
        await eel.load_text("", result);
    }
    // Getting Save as a Dictionary/Array
    eel.expose(load_save)
    function load_save(data) {
        localStorage.setItem('text_in_fname_fauna', data["fname_fauna"]);
        localStorage.setItem('text_in_sname_fauna', data["sname_fauna"]);
        localStorage.setItem('text_in_main_info_fauna', data['main_info_fauna']);
        localStorage.setItem('text_in_second_info_fauna', data['second_info_fauna']);
        localStorage.setItem('text_in_look_fauna', data['look_fauna']);
        localStorage.setItem('text_in_personality_fauna', data['personality_fauna']);
        localStorage.setItem('text_in_freandship_fauna', data['freandship_fauna']);
        localStorage.setItem('text_in_history_fauna', data['history_fauna']);
        localStorage.setItem('text_in_futher_fauna', data['futher_fauna']);
        localStorage.setItem('text_in_notes_fauna', data['notes_fauna']);
        // Loading data into HTML by their fields
        document
            .getElementById('fname_fauna')
            .innerHTML = data["fname_fauna"];
        document
            .getElementById('sname_fauna')
            .innerHTML = data["sname_fauna"];
        document
            .getElementById('main_info_fauna')
            .innerHTML = data['main_info_fauna'];
        document
            .getElementById('second_info_fauna')
            .innerHTML = data['second_info_fauna'];
        document
            .getElementById('look_fauna')
            .innerHTML = data['look_fauna'];
        document
            .getElementById('personality_fauna')
            .innerHTML = data['personality_fauna'];
        document
            .getElementById('freandship_fauna')
            .innerHTML = data['freandship_fauna'];
        document
            .getElementById('history_fauna')
            .innerHTML = data['history_fauna'];
        document
            .getElementById('futher_fauna')
            .innerHTML = data['futher_fauna'];
        document
            .getElementById('notes_fauna')
            .innerHTML = data['notes_fauna'];
    }
    // ----------------------- SECONDARY FUNCTIONS -----------------------
    // Show notification
    eel.expose(notification)
    function notification(message) {
        alert(message)
    }
}
