// console.log("starting...");
// led_blink();
// reset_tag_list();
// getTakeIn();
// getTakeOut();
// //getNumTagCurrent();
// //getNumTagLast();
// //checkStaticData(500);
// //printLastOnetag();
// //printCurrentOnetag();
// //detroyInventory();
// //checkReadCmdOnly(0);
// //StopReadCmdOnly(0);
// //printInformation();
// askUserAndExecute(1);

console.log("starting...");

function askUserAndExecute(choice) {
    switch (choice) {
        case 1:
            led_blink();
            break;
        case 2:
            reset_tag_list();
            break;
        case 3:
            getTakeIn();
            break;
        case 4:
            getTakeOut();
            break;
        default:
            console.log("Invalid choice");
    }
}

while (true) {
    let choice = prompt("Enter your choice (1: LED blink, 2: Reset tag list, 3: Take in, 4: Take out): ");
    
    choice = parseInt(choice, 10);

    askUserAndExecute(choice);
}

