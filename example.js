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
    _delay(1000);
    getNumTagCurrent();
    _delay(1000);
    getNumTagLast();
    _delay(1000);
    printLastOnetag();
    _delay(1000);
    printCurrentOnetag();
    _delay(1000);
}

