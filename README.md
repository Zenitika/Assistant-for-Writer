<p align="center"><img src="assets/Logo.png"><p>
<br/>

#### Table of contents:
- [Authors](#authors)
- [About app](#about-app)
- [Installation instructions](#installation-instructions)
- [Application launch instructions](#application-launch-instructions)
- [Instructions for use](#instructions-for-use)
- [Known bugs and usage questions](#known-bugs-and-usage-questions)
- [List of changes](#list-of-changes)
- [Contact Information](#contact-information)
- [License](#license)

### Authors
___
- Zenitika
### About app
___
​ ​ ​ ​ ​ ​ ​ ​ This is a Windows 10 app that is primarily designed to make life easier for writers. Here are some features you can already find there:
1. Simple built-in text editor and spell checker
2. Various tools for editing individual elements of your story
    >Editing characters, building locations, etc.

​ ​ ​ ​ ​ ​ ​ ​ And other features that will be constantly improved and filled with new features.

[Back to table of contents](#table-of-contents)

### Installation instructions
___
​ ​ ​ ​ ​ ​ ​ ​ The application does not need to be installed, it is portable, you just need to download and run it. It is advisable to place the downloaded .exe file in a separate folder, because the first time you run it, a folder is created in the same place where the .exe is located for your saves. Also, the "main.log" file will be created there. It will store all the errors that occurred during the work in the application. Your data is not transferred anywhere. It was needed only so that, if you wish, you could write about a malfunction by attaching error data.  
 ​ ​ ​ ​ ​ ​ ​ If you decide to build the .exe file from sources yourself, then you will need installed python, version 3.10.4 or higher, and installed dependencies from the "requirements.txt" file. Next, you can create an .exe in the following way:
 1. Setting up virtualenv with required Python version and specified required Python packages from "requirements.txt" file
 2. Installing PyInstaller ```pip install PyInstaller```
 3. In the application folder do ```python -m eel main.py web --onefile --noconsole```

[Back to table of contents](#table-of-contents)

### Application launch instructions
___
 ​ ​ ​ ​ ​ ​ ​ Just run the file "Writer's Assistant.exe"

[Back to table of contents](#table-of-contents)

### Instructions for use
___
 ​ ​ ​ ​ ​ ​ ​ I tried to make the application as intuitive as possible, therefore, as such, I don’t need instructions there, but still in the future I plan to add a section for detailed training inside the application.

[Back to table of contents](#table-of-contents)

### Known bugs and usage questions
___
1. When saving work via the "save us" button, be careful, because if a file with the same name already exists in the "saves" folder, it will be overwritten.
2. All saves of your work are stored in json files, therefore, please, in order to avoid errors, do not save or upload files with other extensions. And also do not try to load saves from different sections.
3. Before clearing all fields via the "Clear all fields" button, please note that only a combination of buttons will return the data:
   1. First you need to click on the "Cancel changes" button
   2. Then you need to click on the "Return changes" button
        >In testing, this is the only way that worked for me.
4. Do not change the name of the application. Otherwise, the save folder will be created either at the very root of your drive, for example, C:\\, or it will not work at all.

[Back to table of contents](#table-of-contents)
### Contact Information
___
[![Element](https://img.shields.io/badge/-Element-141321?style=for-the-badge&logo=Element&logoColor=green)](https://matrix.to/#/@zenitika:matrix.org)
[![GitHub](https://img.shields.io/badge/-My_GitHub-141321?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/Zenitika)
![ProtonMail](https://img.shields.io/badge/-zenitika@proton.me-141321?style=for-the-badge&logo=ProtonMail&logoColor=#8653d4)

[Back to table of contents](#table-of-contents)

### License
___
This project is licensed under the MIT License - see the LICENSE file for details

[Back to table of contents](#table-of-contents)
