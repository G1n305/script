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
// askUserAndExecute(1)
console.log("starting...");
while (true) {
    led_blink();
    console.log("blink led...");
    _delay();
    console.log("starting...");
    _delay();
    printLastOnetag();
    _delay();
    printCurrentOnetag();
    _delay();
    reset_tag_list();
    _delay();
    getNumTagCurrent();
    _delay();
    getNumTagLast();
    _delay();
}

