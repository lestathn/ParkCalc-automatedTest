import { DashboardPage } from '../models';
import config from '../helpers/config';

const dashboardPage = new DashboardPage();
const URL = config.URL;

fixture `******`
    .page `${URL}`
    .afterEach(async t => {

    });

test('Select Long Garage type', async t => {
    await t.click(dashboardPage.parkingLot)
    await t.click(dashboardPage.typeSelect.withText('Long-Term Garage Parking'))
    await t.expect(dashboardPage.parkingLot.value).eql('Long-Garage')
    await t.wait(2000)
    await t.selectText(dashboardPage.entryDate)
    await t.typeText(dashboardPage.entryDate,"3/24/2020")
    await t.selectText(dashboardPage.entryTime)
    await t.typeText(dashboardPage.entryTime,"11:00")
    await t.wait(2000)
    await t.click(dashboardPage.entryMeridianAM)
    await t.wait(2000)

    await t.selectText(dashboardPage.leavingDate)
    await t.typeText(dashboardPage.leavingDate,"3/24/2020")
    await t.selectText(dashboardPage.leavingTime)
    await t.typeText(dashboardPage.leavingTime,"3:00")
    await t.wait(2000)
    await t.click(dashboardPage.leavingMeridianPM)
    await t.wait(2000)

    await t.click(dashboardPage.calculateButton)
    await t.wait(2000)
    await t.expect((dashboardPage.totalCost).withText('$ 8.00').exists).ok()
});