import { setUser as setUserInLocal, getUser, removeUser } from "./user.ts";

export default function Info() {
    const user = getUser();
    if (!user) {
        return (<></>);
    }
    return (
      <>
        <h2>Wifi</h2>

        <p>SSID: 		<b>daubin</b></p>

        <h2>Trash</h2>
        <p>The red trash can is normal trash.</p>

        <h2>Trash Pickup</h2>
        <p>Put the outside garbage out on Monday night for Tuesday morning pickup.  Recycling is picked up every week and garbage is picked up every other week.  The blue can is recycling, green is yard debris and compost, small brown is garbage and the yellow bin is for glass.</p>

        <h2>Supplies</h2>
        <p>Toilet paper and paper towels are above the sink in the kitchen.</p>

        <h2>Parking</h2>
        <p>Park on the street unless an arrangement has been made with Tom and Peggy (the next door neighbors) for the driveway to be used.</p>

        <h2>TV</h2>
        <p>Use the TV remote to select HDMI inputs.  The Apple TV is set up with Netflix and Hulu.  The Playstation can play DVDs and Bluerays.</p>

        <h2>Music</h2>
        <p>The house is wired with Sonos speakers.  There's an iPad in the livingroom with the Sonos app installed.</p>

        <h2>Sleep</h2>
        <p>There's an air purifier in the front bedroom that works well as a sound machine.  There are a couple of night lights around if you need those.</p>

        <h2>Locking Up</h2>
        <p>Please keep both the outer and inner back doors locked.  Lock the top and bottom locks on the front door.  Remember to close and lock all windows (you can leave the kitchen sink window open).</p>

        <h2>Restaurants and Shopping</h2>
        <p>
        15th and Prescott : Coffee at Extracto.  Grain and Gristle is a solid lunch / dinner choice (and breakfast on the weekends).  Muscadine has breakfast all week.  PokPok is great Thai.  Kings of Canna has your weed.  The market on the corner is there in a pinch.
        </p>
        <p>
        15th and Fremont: Whole Foods, Starbucks.
        </p>
        <p>
        Alberta Street (4 blocks North) has tons of restaurants, bars and shops.
        </p>
    </>);
}