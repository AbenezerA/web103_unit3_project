# WEB103 Project 3 - *Virtual Community Space*

Submitted by: **Abenezer Amanuel**

About this web app: **This web app displays information about events happening at locations which the user can choose.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [ ] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app displays the title of the app**
- [x] **A visual interface allows the user to select a Location they would like to view**
- [ ] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [x] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [ ] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./client/src/assets/walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/) for macOS
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I found it challenging to implement the page to display events happening at each location, because calling the API functions within each location's page seemed to break the events page as well. I kept getting the error that the EventsAPI wasn't defined in the Events.jsx page even though I wasn't 'doing' anything with the Events page. I suspect this might be a problem with the links, because /event can be interpreted as a /:locationId where 'event' is the locationId, but I unfortunately had no time to try out my hypothesis and had to make do with a half-finished implementation of the locations page.

## License

Copyright [2023] [Abenezer Amanuel]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.