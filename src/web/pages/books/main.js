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
    if (localStorage.getItem('text_in_editor_book') !== null) {
        document
            .getElementById('editor')
            .innerHTML = localStorage.getItem('text_in_editor_book');
    }
    if (localStorage.getItem('text_in_notes_book') !== null) {
        document
            .getElementById('notes')
            .innerHTML = localStorage.getItem('text_in_notes_book');
    }

    // Track each keystroke and execute the command on each keystroke
    document.addEventListener('keydown', function (e) {
        if (e["key"] === "Tab") {
            formatDoc("insertText", "")
        }
        // Write the contents of our editor to the repository
        localStorage.setItem(
            'text_in_editor_book',
            document.getElementById('editor').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_book',
            document.getElementById('notes').innerHTML
        );
    });

    // ----------------------- LOGIC OF NAVIGATION BUTTONS AND APP CONTROL ----------------------- //
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
            .getElementById('editor')
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
    // ------ BUTTONS TO SAVE DATA ------ Saving data from fields to the browser
    // storage and to a save file with a user-specified name
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
            'text_in_editor_book',
            document.getElementById('editor').innerHTML
        );
        localStorage.setItem(
            'text_in_notes_book',
            document.getElementById('notes').innerHTML
        );
        // Save values ​​to file via python
        let data_value = [
            document
                .getElementById('editor')
                .innerHTML = localStorage.getItem('text_in_editor_book'),
            document
                .getElementById('notes')
                .innerHTML = localStorage.getItem('text_in_notes_book')
        ]
        let data_key = ['editor', 'notes']
        await eel.save_text(data_value, data_key, file_name);
    }

    // ------ BUTTONS TO LOAD A SAVE ------
    // Loading a save from the default file
    let btn = document.querySelector("#save_load");
    btn.addEventListener("click", load_text);
    async function load_text() {
        await eel.load_text("data_books.json");
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
        console.log(data["editor"]);
        localStorage.setItem('text_in_editor_book', data["editor"]);
        localStorage.setItem('text_in_notes_book', data["notes"]);
        // Loading data into HTML by their fields
        document
            .getElementById('editor')
            .innerHTML = data["editor"];
        document
            .getElementById('notes')
            .innerHTML = data["notes"];
    }
    // ----------------------- SECONDARY FUNCTIONS -----------------------
    // Show notification
    eel.expose(notification)
    function notification(message) {
        alert(message)
    }
}
