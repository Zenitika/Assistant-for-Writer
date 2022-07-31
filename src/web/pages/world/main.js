// ----------------------- CUSTOMIZING THE OPERATION OF THE TEXT EDITOR BUTTONS -----------------------//
function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    if (sCmd === "insertText") {
        document.execCommand(sCmd, false, "    ");
    }
}
// ----------------------- STARTING THE OTHER FUNCTIONS -----------------------//
window.onload = function () {
    // ----------------------- LOADING THE LAST JOB -----------------------//
    if (localStorage.getItem('text_in_fname_world') !== null) {
        document
            .getElementById('fname')
            .innerHTML = localStorage.getItem('text_in_fname_world');
    }
    if (localStorage.getItem('text_in_sname_world') !== null) {
        document
            .getElementById('sname')
            .innerHTML = localStorage.getItem('text_in_sname_world');
    }
    if (localStorage.getItem('text_in_tname_world') !== null) {
        document
            .getElementById('tname')
            .innerHTML = localStorage.getItem('text_in_tname_world');
    }
    if (localStorage.getItem('text_in_futher_world') !== null) {
        document
            .getElementById('futher')
            .innerHTML = localStorage.getItem('text_in_futher_world');
    }
    if (localStorage.getItem('text_in_main_info_world') !== null) {
        document
            .getElementById('main_info_world')
            .innerHTML = localStorage.getItem('text_in_main_info_world');
    }
    if (localStorage.getItem('text_in_notes_world') !== null) {
        document
            .getElementById('notes')
            .innerHTML = localStorage.getItem('text_in_notes_world');
    }
    if (localStorage.getItem('text_in_history_world') !== null) {
        document
            .getElementById('history')
            .innerHTML = localStorage.getItem('text_in_history_world');
    }

    // Track each keystroke and execute the command on each keystroke
    document.addEventListener('keydown', function (e) {
        if (e["key"] === "Tab") {
            formatDoc("insertText", "")
        }
        // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_fname_world',
            document.getElementById('fname').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_world',
            document.getElementById('sname').innerHTML
        );
        localStorage.setItem(
            'text_in_tname_world',
            document.getElementById('tname').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_world',
            document.getElementById('futher').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_world',
            document.getElementById('notes').innerHTML
        );
        localStorage.setItem(
            'text_in_history_world',
            document.getElementById('history').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_world',
            document.getElementById('main_info_world').innerHTML
        );
    });
    // ----------------------- LOGIC OF NAVIGATION BUTTONS AND APP CONTROL -----------------------//
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
            .getElementById('fname')
            .innerHTML = '';
        document
            .getElementById('sname')
            .innerHTML = '';
        document
            .getElementById('main_info_world')
            .innerHTML = '';
        document
            .getElementById('second_info')
            .innerHTML = '';
        document
            .getElementById('look')
            .innerHTML = '';
        document
            .getElementById('personality')
            .innerHTML = '';
        document
            .getElementById('freandship')
            .innerHTML = '';
        document
            .getElementById('history')
            .innerHTML = '';
        document
            .getElementById('futher')
            .innerHTML = '';
        document
            .getElementById('notes')
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
        let result = prompt("File name:", "example.json");
        save_text(result)
    }
    // Saving data from fields to the browser storage and to the default save file
    let btn_save = document.querySelector("#save");
    btn_save.addEventListener(
        "click",
        () => save_text("data_world_or_location.json")
    );
    async function save_text(file_name) {
        // Store values ​​in browser storage
        localStorage.setItem(
            'text_in_fname_world',
            document.getElementById('fname').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_world',
            document.getElementById('sname').innerHTML
        );
        localStorage.setItem(
            'text_in_tname_world',
            document.getElementById('tname').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_world',
            document.getElementById('futher').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_world',
            document.getElementById('notes').innerHTML
        );
        localStorage.setItem(
            'text_in_history_world',
            document.getElementById('history').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_world',
            document.getElementById('main_info_world').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('fname')
                .innerHTML = localStorage.getItem('text_in_fname_world'),
            document
                .getElementById('sname')
                .innerHTML = localStorage.getItem('text_in_sname_world'),
            document
                .getElementById('tname')
                .innerHTML = localStorage.getItem('text_in_tname_world'),
            document
                .getElementById('main_info_world')
                .innerHTML = localStorage.getItem('text_in_main_info_world'),
            document
                .getElementById('history')
                .innerHTML = localStorage.getItem('text_in_history_world'),
            document
                .getElementById('futher')
                .innerHTML = localStorage.getItem('text_in_futher_world'),
            document
                .getElementById('notes')
                .innerHTML = localStorage.getItem('text_in_notes_world')
        ]
        let data_key = [
            'fname',
            'sname',
            'tname',
            'main_info_world',
            'history',
            'futher',
            'notes'
        ]
        await eel.save_text(data_value, data_key, file_name);
    }
    // ------ BUTTONS TO LOAD A SAVE ------//
    //Loading a save from the default file
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
        localStorage.setItem('text_in_fname_world', data["fname"]);
        localStorage.setItem('text_in_sname_world', data["sname"]);
        localStorage.setItem('text_in_tname_world', data['tname']);
        localStorage.setItem('text_in_main_info_world', data['main_info_world']);
        localStorage.setItem('text_in_history_world', data['history']);
        localStorage.setItem('text_in_futher_world', data['futher']);
        localStorage.setItem('text_in_notes_world', data['notes']);
        // Loading data into HTML by their fields
        document
            .getElementById('fname')
            .innerHTML = data["fname"];
        document
            .getElementById('sname')
            .innerHTML = data["sname"];
        document
            .getElementById('main_info_world')
            .innerHTML = data['main_info_world'];
        document
            .getElementById('tname')
            .innerHTML = data['tname'];
        document
            .getElementById('history')
            .innerHTML = data['history'];
        document
            .getElementById('futher')
            .innerHTML = data['futher'];
        document
            .getElementById('notes')
            .innerHTML = data['notes'];
    }
    // ----------------------- SECONDARY FUNCTIONS -----------------------//
    // Show notification
    eel.expose(notification)
    function notification(message) {
        alert(message)
    }
}