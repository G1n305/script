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
    //reset_tag_list();
    //getTakeIn();
    //getTakeOut();
    //getNumTagCurrent();
    //getNumTagLast();
    printLastOnetag();
    //reset_tag_list();
    //printCurrentOnetag();
    //CheckCRC(ctx, RecvBuff, RecvBuff[0]);
    _delay(1000);
}

