// ----------------------- CUSTOMIZING THE OPERATION OF THE TEXT EDITOR BUTTONS -----------------------//
function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    if (sCmd === "insertText") {
        document.execCommand(sCmd, false, "    ");
    }
}
// ----------------------- STARTING THE OTHER FUNCTIONS -----------------------
window.onload = function () {
    // ----------------------- LOADING THE LAST JOB -----------------------
    if (localStorage.getItem('text_in_fname_flora') !== null) {
        document
            .getElementById('fname_flora')
            .innerHTML = localStorage.getItem('text_in_fname_flora');
    }
    if (localStorage.getItem('text_in_sname_flora') !== null) {
        document
            .getElementById('sname_flora')
            .innerHTML = localStorage.getItem('text_in_sname_flora');
    }
    if (localStorage.getItem('text_in_main_info_flora') !== null) {
        document
            .getElementById('main_info_flora')
            .innerHTML = localStorage.getItem('text_in_main_info_flora');
    }
    if (localStorage.getItem('text_in_second_info_flora') !== null) {
        document
            .getElementById('second_info_flora')
            .innerHTML = localStorage.getItem('text_in_second_info_flora');
    }
    if (localStorage.getItem('text_in_look_flora') !== null) {
        document
            .getElementById('look_flora')
            .innerHTML = localStorage.getItem('text_in_look_flora');
    }
    if (localStorage.getItem('text_in_personality_flora') !== null) {
        document
            .getElementById('personality_flora')
            .innerHTML = localStorage.getItem('text_in_personality_flora');
    }
    if (localStorage.getItem('text_in_freandship_flora') !== null) {
        document
            .getElementById('freandship_flora')
            .innerHTML = localStorage.getItem('text_in_freandship_flora');
    }
    if (localStorage.getItem('text_in_history_flora') !== null) {
        document
            .getElementById('history_flora')
            .innerHTML = localStorage.getItem('text_in_history_flora');
    }
    if (localStorage.getItem('text_in_futher_flora') !== null) {
        document
            .getElementById('futher_flora')
            .innerHTML = localStorage.getItem('text_in_futher_flora');
    }
    if (localStorage.getItem('text_in_notes_flora') !== null) {
        document
            .getElementById('notes_flora')
            .innerHTML = localStorage.getItem('text_in_notes_flora');
    }
    // Track each keystroke and execute the command on each keystroke
    document.addEventListener('keydown', function (e) {
        if (e["key"] === "Tab") {
            formatDoc("insertText", "")
        }
        // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_fname_flora',
            document.getElementById('fname_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_flora',
            document.getElementById('sname_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_flora',
            document.getElementById('main_info_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_look_flora',
            document.getElementById('look_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_flora',
            document.getElementById('freandship_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_history_flora',
            document.getElementById('history_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_flora',
            document.getElementById('personality_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_flora',
            document.getElementById('futher_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_flora',
            document.getElementById('notes_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_flora',
            document.getElementById('second_info_flora').innerHTML
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
            .getElementById('fname_person')
            .innerHTML = '';
        document
            .getElementById('sname_person')
            .innerHTML = '';
        document
            .getElementById('main_info_person')
            .innerHTML = '';
        document
            .getElementById('second_info_person')
            .innerHTML = '';
        document
            .getElementById('look_person')
            .innerHTML = '';
        document
            .getElementById('personality_person')
            .innerHTML = '';
        document
            .getElementById('freandship_person')
            .innerHTML = '';
        document
            .getElementById('history_person')
            .innerHTML = '';
        document
            .getElementById('futher_person')
            .innerHTML = '';
        document
            .getElementById('notes_person')
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
    btn_save.addEventListener("click", () => save_text("data_flora.json"));
    async function save_text(file_name) {
        // Store values ​​in browser storage
        localStorage.setItem(
            'text_in_fname_flora',
            document.getElementById('fname_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_flora',
            document.getElementById('sname_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_flora',
            document.getElementById('main_info_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_look_flora',
            document.getElementById('look_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_flora',
            document.getElementById('freandship_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_history_flora',
            document.getElementById('history_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_flora',
            document.getElementById('personality_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_flora',
            document.getElementById('futher_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_flora',
            document.getElementById('notes_flora').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_flora',
            document.getElementById('second_info_flora').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('fname_flora')
                .innerHTML = localStorage.getItem('text_in_fname_flora'),
            document
                .getElementById('sname_flora')
                .innerHTML = localStorage.getItem('text_in_sname_flora'),
            document
                .getElementById('main_info_flora')
                .innerHTML = localStorage.getItem('text_in_main_info_flora'),
            document
                .getElementById('second_info_flora')
                .innerHTML = localStorage.getItem('text_in_second_info_flora'),
            document
                .getElementById('look_flora')
                .innerHTML = localStorage.getItem('text_in_look_flora'),
            document
                .getElementById('personality_flora')
                .innerHTML = localStorage.getItem('text_in_personality_flora'),
            document
                .getElementById('freandship_flora')
                .innerHTML = localStorage.getItem('text_in_freandship_flora'),
            document
                .getElementById('history_flora')
                .innerHTML = localStorage.getItem('text_in_history_flora'),
            document
                .getElementById('futher_flora')
                .innerHTML = localStorage.getItem('text_in_futher_flora'),
            document
                .getElementById('notes_flora')
                .innerHTML = localStorage.getItem('text_in_notes_flora')
        ]
        let data_key = [
            'fname_flora',
            'sname_flora',
            'main_info_flora',
            'second_info_flora',
            'look_flora',
            'personality_flora',
            'freandship_flora',
            'history_flora',
            'futher_flora',
            'notes_flora'
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
        localStorage.setItem('text_in_fname_flora', data["fname_flora"]);
        localStorage.setItem('text_in_sname_flora', data["sname_flora"]);
        localStorage.setItem('text_in_main_info_flora', data['main_info_flora']);
        localStorage.setItem('text_in_second_info_flora', data['second_info_flora']);
        localStorage.setItem('text_in_look_flora', data['look_flora']);
        localStorage.setItem('text_in_personality_flora', data['personality_flora']);
        localStorage.setItem('text_in_freandship_flora', data['freandship_flora']);
        localStorage.setItem('text_in_history_flora', data['history_flora']);
        localStorage.setItem('text_in_futher_flora', data['futher_flora']);
        localStorage.setItem('text_in_notes_flora', data['notes_flora']);
        // Loading data into HTML by their fields
        document
            .getElementById('fname_flora')
            .innerHTML = data["fname_flora"];
        document
            .getElementById('sname_flora')
            .innerHTML = data["sname_flora"];
        document
            .getElementById('main_info_flora')
            .innerHTML = data['main_info_flora'];
        document
            .getElementById('second_info_flora')
            .innerHTML = data['second_info_flora'];
        document
            .getElementById('look_flora')
            .innerHTML = data['look_flora'];
        document
            .getElementById('personality_flora')
            .innerHTML = data['personality_flora'];
        document
            .getElementById('freandship_flora')
            .innerHTML = data['freandship_flora'];
        document
            .getElementById('history_flora')
            .innerHTML = data['history_flora'];
        document
            .getElementById('futher_flora')
            .innerHTML = data['futher_flora'];
        document
            .getElementById('notes_flora')
            .innerHTML = data['notes_flora'];
    }
    // ----------------------- SECONDARY FUNCTIONS -----------------------//
    // Show notification
    eel.expose(notification)
    function notification(message) {
        alert(message)
    }
}
