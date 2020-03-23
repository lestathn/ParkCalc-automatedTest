import { Selector, ClientFunction } from 'testcafe';

export default class DashboardPage {
    constructor () {
        this.parkingLot         = Selector('#ParkingLot');
        this.entryDate          = Selector('#StartingDate');
        this.entryTime          = Selector('#StartingTime');
        this.entryMeridianAM    = Selector('body > form:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(4)');
        this.entryMeridianPM    = Selector('body > form:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(5)');
        this.leavingDate        = Selector('#LeavingDate');
        this.leavingTime        = Selector('#LeavingTime');
        this.leavingMeridianAM    = Selector('body > form:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=radio]:nth-child(4)');
        this.leavingMeridianPM    = Selector('body > form:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=radio]:nth-child(5)');
        this.calculateButton    = Selector('body > form:nth-child(2) > input[type=submit]:nth-child(3)');
        this.typeSelect         = this.parkingLot.find('option')
        this.totalCost          = Selector('body > form:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b');
    }
}