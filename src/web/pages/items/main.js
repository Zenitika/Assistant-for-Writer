// ----------------------- CUSTOMIZING THE OPERATION OF THE TEXT EDITOR BUTTONS ----------------------- //
function formatDoc(sCmd, sValue) {
    document.execCommand(sCmd, false, sValue);
    if (sCmd === "insertText"){document.execCommand(sCmd, false, "    ");}
  }
// ----------------------- STARTING THE OTHER FUNCTIONS ----------------------- //
window.onload=function(){
// ----------------------- LOADING THE LAST JOB ----------------------- //
    if (localStorage.getItem('text_in_fname_items') !== null) {
        document
            .getElementById('fname_items')
            .innerHTML = localStorage.getItem('text_in_fname_items');
    }
    if (localStorage.getItem('text_in_sname_items') !== null) {
        document
            .getElementById('sname_items')
            .innerHTML = localStorage.getItem('text_in_sname_items');
    }
    if (localStorage.getItem('text_in_main_info_items') !== null) {
        document
            .getElementById('main_info_items')
            .innerHTML = localStorage.getItem('text_in_main_info_items');
    }
    if (localStorage.getItem('text_in_look_items') !== null) {
        document
            .getElementById('look_items')
            .innerHTML = localStorage.getItem('text_in_look_items');
    }
    if (localStorage.getItem('text_in_history_items') !== null) {
        document
            .getElementById('history_items')
            .innerHTML = localStorage.getItem('text_in_history_items');
    }
    if (localStorage.getItem('text_in_futher_items') !== null) {
        document
            .getElementById('futher_items')
            .innerHTML = localStorage.getItem('text_in_futher_items');
    }
    if (localStorage.getItem('text_in_notes_items') !== null) {
        document
            .getElementById('notes_items')
            .innerHTML = localStorage.getItem('text_in_notes_items');
    }

        // Track each keystroke and execute the command on each keystroke
        document.addEventListener('keydown', function (e) {
            if (e["key"] === "Tab"){formatDoc("insertText", "")}
            // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_fname_items',
            document.getElementById('fname_items').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_items',
            document.getElementById('sname_items').innerHTML
        );
        localStorage.setItem(
            'text_in_look_items',
            document.getElementById('look_items').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_items',
            document.getElementById('futher_items').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_items',
            document.getElementById('notes_items').innerHTML
        );
        localStorage.setItem(
            'text_in_history_items',
            document.getElementById('history_items').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_items',
            document.getElementById('main_info_items').innerHTML
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
    let btn_remove_text_in_fields = document.querySelector("#remove_text_in_fields");
        btn_remove_text_in_fields.addEventListener("click", remove_text_in_fields);
    async function remove_text_in_fields(){
        // Resetting the contents of the fields
        document
            .getElementById('fname_items')
            .innerHTML = '';
        document
            .getElementById('sname_items')
            .innerHTML = '';
        document
            .getElementById('main_info_items')
            .innerHTML = '';
        document
            .getElementById('look_items')
            .innerHTML = '';
        document
            .getElementById('history_items')
            .innerHTML = '';
        document
            .getElementById('futher_items')
            .innerHTML = '';
        document
            .getElementById('notes_items')
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
    // Saving data from fields to the browser storage and to a save file with a user-specified name
    let btn_save_save_us = document.querySelector("#save_us");
    btn_save_save_us.addEventListener("click", save_us_text);
    async function save_us_text() {
        let result = prompt("Имя файла:", "example.json");
        save_text(result)
    }
    let btn_save = document.querySelector("#save");
    btn_save.addEventListener("click", () => save_text("data_items.json"));
    async function save_text(file_name) {
        localStorage.setItem(
            'text_in_fname_items',
            document.getElementById('fname_items').innerHTML
        );
        localStorage.setItem(
            'text_in_sname_items',
            document.getElementById('sname_items').innerHTML
        );
        localStorage.setItem(
            'text_in_look_items',
            document.getElementById('look_items').innerHTML
        );
        localStorage.setItem(
            'text_in_futher_items',
            document.getElementById('futher_items').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_items',
            document.getElementById('notes_items').innerHTML
        );
        localStorage.setItem(
            'text_in_history_items',
            document.getElementById('history_items').innerHTML
        );
        localStorage.setItem(
            'text_in_main_info_items',
            document.getElementById('main_info_items').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('fname_items')
                .innerHTML = localStorage.getItem('text_in_fname_items'),
            document
                .getElementById('sname_items')
                .innerHTML = localStorage.getItem('text_in_sname_items'),
            document
                .getElementById('main_info_items')
                .innerHTML = localStorage.getItem('text_in_main_info_items'),
            document
                .getElementById('look_items')
                .innerHTML = localStorage.getItem('text_in_look_items'),
            document
                .getElementById('history_items')
                .innerHTML = localStorage.getItem('text_in_history_items'),
            document
                .getElementById('futher_items')
                .innerHTML = localStorage.getItem('text_in_futher_items'),
            document
                .getElementById('notes_items')
                .innerHTML = localStorage.getItem('text_in_notes_items')
        ]
        let data_key = [
            'fname_items',
            'sname_items',
            'main_info_items',
            'look_items',
            'history_items',
            'futher_items',
            'notes_items'
        ]
        await eel.save_text(data_value, data_key, file_name);
    }
    // ------ BUTTONS TO LOAD A SAVE ------ //
    // Loading a save from the default file
    let btn = document.querySelector("#save_load");
        btn.addEventListener("click", load_text);
    async function load_text(){
        await eel.load_text("data_items.json");
    }
    // Loading a save from a custom file
    let btn_custom_file = document.querySelector("#open_file");
        btn_custom_file.addEventListener("click", open_file);
    async function open_file(){
        let result = prompt("File name:", "example.json");
        await eel.load_text("", result);
    }
    // Getting Save as a Dictionary/Array
    eel.expose(load_save)
    function load_save(data) {
        localStorage.setItem('text_in_fname_items', data["fname_items"]);
        localStorage.setItem('text_in_sname_items', data["sname_items"]);
        localStorage.setItem('text_in_look_items', data['look_items']);
        localStorage.setItem('text_in_futher_items', data['futher_items']);
        localStorage.setItem('text_in_notes_items', data['notes_items']);
        localStorage.setItem('text_in_history_items', data['history_items']);
        localStorage.setItem('text_in_main_info_items', data['main_info_items']);
        // Loading data into HTML by their fields
        document
            .getElementById('fname_items')
            .innerHTML = data["fname_items"];
        document
            .getElementById('sname_items')
            .innerHTML = data["sname_items"];
        document
            .getElementById('main_info_items')
            .innerHTML = data['main_info_items'];
        document
            .getElementById('look_items')
            .innerHTML = data['look_items'];
        document
            .getElementById('history_items')
            .innerHTML = data['history_items'];
        document
            .getElementById('futher_items')
            .innerHTML = data['futher_items'];
        document
            .getElementById('notes_items')
            .innerHTML = data['notes_items'];
    }
    // ----------------------- SECONDARY FUNCTIONS ----------------------- //
    // Show notification
    eel.expose(notification)
    function notification(message){
        alert(message)
    }
}