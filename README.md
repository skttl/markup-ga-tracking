# Google Analytics tracking through your HTML markup

With this script you can send events and pageviews to Google Analytics just by adding some attributes to your markup. The script will automatically pick up your settings, and handle the tracking for you.

## Usage
Include jQuery and the script in your site, and start marking up.

Each element you want to track, must have a data-ga attribute..

## Options
| Attribute              | Value                                                                                                                                                                          |                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| data-ga                | No value needed, but attribute is required, to start the tracking engine.                                                                                                      | Required                               |
| data-ga-set            | Insert a serialized object of values for setting dimensions and/or metrics. Ie. data-ga-set="{'dimension1':'My dimension', 'metric1':1}"                                       |                                        |
| data-ga-send           | Write page or pageview for tracking a pageview, event for an event.                                                                                                            |                                        |
| data-ga-page           | If you need to overwrite the current pathname for a pageview tracking, you can use this attribute.                                                                             |                                        |
| data-ga-title          | If you need to overwrite the current document title for a pageview tracking, you can use this attribute.                                                                       |                                        |
| data-ga-category       | Write the category for an event tracking.                                                                                                                                      | Required if data-ga-send equals event. |
| data-ga-action         | Write the action for an event tracking.                                                                                                                                        | Required if data-ga-send equals event. |
| data-ga-label          | Write the label for an event tracking.                                                                                                                                         |                                        |
| data-ga-value          | Write the value for an event tracking. Will be converted to a float value when tracked.                                                                                        |                                        |
| data-ga-trigger        | The event you want the tracking to trigger upon. Defaults to "click". If you write "init", the tracking will be made immediately. Ie. <body data-ga data-ga-trigger="init" data-ga-send="pageview"> |                                        |
| data-ga-nonInteraction | If you don't want your event tracking to trigger an interaction (and mess with your bounce rate) you can add this attribute. No value is needed.                               |                                        |
