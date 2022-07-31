// ----------------------- CUSTOMIZING THE OPERATION OF THE TEXT EDITOR BUTTONS ----------------------- //
function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    if (sCmd === "insertText") {
        document.execCommand(sCmd, false, "    ");
    }
}
// ----------------------- STARTING THE OTHER FUNCTIONS ----------------------- //
window.onload=function(){
    // ----------------------- LOADING THE LAST JOB ----------------------- //
    if (localStorage.getItem('text_in_fname_person') !== null) {
        document
            .getElementById('fname_person')
            .innerHTML = localStorage.getItem('text_in_fname_person');
    }
    if (localStorage.getItem('text_in_sname_person') !== null) {
        document
            .getElementById('sname_person')
            .innerHTML = localStorage.getItem('text_in_sname_person');
    }
    if (localStorage.getItem('text_in_main_info_person') !== null) {
        document
            .getElementById('main_info_person')
            .innerHTML = localStorage.getItem('text_in_main_info_person');
    }
    if (localStorage.getItem('text_in_second_info_person') !== null) {
        document
            .getElementById('second_info_person')
            .innerHTML = localStorage.getItem('text_in_second_info_person');
    }
    if (localStorage.getItem('text_in_look_person') !== null) {
        document
            .getElementById('look_person')
            .innerHTML = localStorage.getItem('text_in_look_person');
    }
    if (localStorage.getItem('text_in_personality_person') !== null) {
        document
            .getElementById('personality_person')
            .innerHTML = localStorage.getItem('text_in_personality_person');
    }
    if (localStorage.getItem('text_in_freandship_person') !== null) {
        document
            .getElementById('freandship_person')
            .innerHTML = localStorage.getItem('text_in_freandship_person');
    }
    if (localStorage.getItem('text_in_history_person') !== null) {
        document
            .getElementById('history_person')
            .innerHTML = localStorage.getItem('text_in_history_person');
    }
    if (localStorage.getItem('text_in_futher_person') !== null) {
        document
            .getElementById('futher_person')
            .innerHTML = localStorage.getItem('text_in_futher_person');
    }
    if (localStorage.getItem('text_in_notes_person') !== null) {
        document
            .getElementById('notes_person')
            .innerHTML = localStorage.getItem('text_in_notes_person');
    }
        // Track each keystroke and execute the command on each keystroke
    document.addEventListener('keydown', function (e) {
        if (e["key"] === "Tab") {
            formatDoc("insertText", "")
        }
        // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_fname_person',
            document.getElementById('fname_person').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_person',
            document.getElementById('sname_person').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_person',
            document.getElementById('main_info_person').innerHTML
        );
        localStorage.setItem(
            'text_in_look_person',
            document.getElementById('look_person').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_person',
            document.getElementById('freandship_person').innerHTML
        );
        localStorage.setItem(
            'text_in_history_person',
            document.getElementById('history_person').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_person',
            document.getElementById('personality_person').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_person',
            document.getElementById('futher_person').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_person',
            document.getElementById('notes_person').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_person',
            document.getElementById('second_info_person').innerHTML
        );
    });
// ----------------------- LOGIC OF NAVIGATION BUTTONS AND APP CONTROL ----------------------- //
    // Back button
    let btn_back = document.querySelector("#back");
        btn_back.addEventListener("click", back);
    async function back(){
        window.location.href="../main.html";
    }
    // Delete a file
    let btn_delete_file = document.querySelector("#delete_file");
        btn_delete_file.addEventListener("click", delete_file);
    async function delete_file(){
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
    async function open_folder(){
        await eel.open_folder()
    }
    // Close program
    let btn_ex = document.querySelector('#btn_ex');
        btn_ex.addEventListener("click", close_programm);
    async function close_programm(){
        await eel.close_programm();
    }
    // ------ BUTTONS TO SAVE DATA ------ //
    // Saving data from fields to the browser storage and to a save file with a user-specified name //
    let btn_save_save_us = document.querySelector("#save_us");
    btn_save_save_us.addEventListener("click", save_us_text);
    async function save_us_text() {
        let result = prompt("File name:", "example.json");
        save_text(result)
    }
    // Saving data from fields to the browser storage and to the default save file
    let btn_save = document.querySelector("#save");
    btn_save.addEventListener("click", () => save_text("data_person.json"));
    async function save_text(file_name) {
        // Store values ​​in browser storage
        localStorage.setItem(
            'text_in_fname_person',
            document.getElementById('fname_person').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_person',
            document.getElementById('sname_person').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_person',
            document.getElementById('main_info_person').innerHTML
        );
        localStorage.setItem(
            'text_in_look_person',
            document.getElementById('look_person').innerHTML
        );
        localStorage.setItem(
            'text_in_freandship_person',
            document.getElementById('freandship_person').innerHTML
        );
        localStorage.setItem(
            'text_in_history_person',
            document.getElementById('history_person').innerHTML
        );
        localStorage.setItem(
            'text_in_personality_person',
            document.getElementById('personality_person').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_person',
            document.getElementById('futher_person').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_person',
            document.getElementById('notes_person').innerHTML
        );
        localStorage.setItem(
            'text_in_second_info_person',
            document.getElementById('second_info_person').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('fname_person')
                .innerHTML = localStorage.getItem('text_in_fname_person'),
            document
                .getElementById('sname_person')
                .innerHTML = localStorage.getItem('text_in_sname_person'),
            document
                .getElementById('main_info_person')
                .innerHTML = localStorage.getItem('text_in_main_info_person'),
            document
                .getElementById('second_info_person')
                .innerHTML = localStorage.getItem('text_in_second_info_person'),
            document
                .getElementById('look_person')
                .innerHTML = localStorage.getItem('text_in_look_person'),
            document
                .getElementById('personality_person')
                .innerHTML = localStorage.getItem('text_in_personality_person'),
            document
                .getElementById('freandship_person')
                .innerHTML = localStorage.getItem('text_in_freandship_person'),
            document
                .getElementById('history_person')
                .innerHTML = localStorage.getItem('text_in_history_person'),
            document
                .getElementById('futher_person')
                .innerHTML = localStorage.getItem('text_in_futher_person'),
            document
                .getElementById('notes_person')
                .innerHTML = localStorage.getItem('text_in_notes_person')
        ]
        let data_key = [
            'fname_person',
            'sname_person',
            'main_info_person',
            'second_info_person',
            'look_person',
            'personality_person',
            'freandship_person',
            'history_person',
            'futher_person',
            'notes_person'
        ]
        await eel.save_text(data_value, data_key, file_name);
    }
    // ------ BUTTONS TO LOAD A SAVE ------ //
    // Loading a save from the default file
    let btn = document.querySelector("#save_load");
    btn.addEventListener("click", load_text);
    async function load_text() {
        await eel.load_text("data_person.json");
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
        localStorage.setItem('text_in_fname_person', data["fname_person"]);
        localStorage.setItem('text_in_sname_person', data["sname_person"]);
        localStorage.setItem('text_in_main_info_person', data['main_info_person']);
        localStorage.setItem('text_in_second_info_person', data['second_info_person']);
        localStorage.setItem('text_in_look_person', data['look_person']);
        localStorage.setItem('text_in_personality_person', data['personality_person']);
        localStorage.setItem('text_in_freandship_person', data['freandship_person']);
        localStorage.setItem('text_in_history_person', data['history_person']);
        localStorage.setItem('text_in_futher_person', data['futher_person']);
        localStorage.setItem('text_in_notes_person', data['notes_person']);
        // Loading data into HTML by their fields
        document
            .getElementById('fname_person')
            .innerHTML = data["fname_person"];
        document
            .getElementById('sname_person')
            .innerHTML = data["sname_person"];
        document
            .getElementById('main_info_person')
            .innerHTML = data['main_info_person'];
        document
            .getElementById('second_info_person')
            .innerHTML = data['second_info_person'];
        document
            .getElementById('look_person')
            .innerHTML = data['look_person'];
        document
            .getElementById('personality_person')
            .innerHTML = data['personality_person'];
        document
            .getElementById('freandship_person')
            .innerHTML = data['freandship_person'];
        document
            .getElementById('history_person')
            .innerHTML = data['history_person'];
        document
            .getElementById('futher_person')
            .innerHTML = data['futher_person'];
        document
            .getElementById('notes_person')
            .innerHTML = data['notes_person'];
    }
    // ----------------------- SECONDARY FUNCTIONS ----------------------- //
    // Show notification
    eel.expose(notification)
    function notification(message) {
        alert(message)
    }
}
