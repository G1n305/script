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

while (true) {
    led_blink();
    _delay(1000);
    printLastOnetag();
    //reset_tag_list();
    //printCurrentOnetag();
    //CheckCRC(ctx, RecvBuff, RecvBuff[0]);
    _delay(1000);
    printCurrentOnetag();
    _delay(1000);
    getTakeIn();
    getTakeOut();
    _delay(1000);
    // printInformation();
    // _delay(1000);
    detroyInventory();
    reset_tag_list();
    _delay(1000);
}

