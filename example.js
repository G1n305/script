console.log("starting...");
// while (true) {
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
    led_blink();
// }

