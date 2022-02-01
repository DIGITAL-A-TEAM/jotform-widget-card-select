# Jotform Widget: DAT Card Select

This project provides the code for the Jotform Widget *DAT Card Select*.

[![Deployment (Prod)](https://github.com/Digital-A-TEAM/jotform-widget-card-select/actions/workflows/main.yml/badge.svg)](https://github.com/Digital-A-TEAM/jotform-widget-card-select/actions/workflows/main.yml) [![Deployment (Dev)](https://github.com/Digital-A-TEAM/jotform-widget-card-select/actions/workflows/dev.yml/badge.svg)](https://github.com/Digital-A-TEAM/jotform-widget-card-select/actions/workflows/dev.yml)

![image](https://user-images.githubusercontent.com/24431825/152054396-18155f67-cf96-4925-a4d2-f5f38f065e71.png)

## How to use
1. Host the code on a webserver
2. Go to your *Features* > *Form Widgets* > *Create New Widget*
3. Add following parameters:
![image](https://user-images.githubusercontent.com/24431825/152062691-32420cf1-2144-4c4f-bce8-713d74fe1c4d.png)
4. Add the new widget to a form

## Setup inside jotform
This widget is fully setup trough a json:
```
{
    "type": "radio", // setup type: radio or checkbox
    "item": [{
            "head": { // setup the headings
                "bgcolor": "#F2902F", // Background color of the item heading 
                "text": "Basic",      // The item heading
                "stars": 1            // Rating
            },
            "rows": {
                "row": [{             // setup rows
                        "icon": "yes", // icon type: yes or no
                        "text": "Leistung 1" // description
                    },
                    {
                        "icon": "no",
                        "text": "Leistung 2"
                    },
                    {
                        "icon": "no",
                        "text": "Zusatz "
                    },
                    // ... 
                ]
            }
        },
        {
          // new item ...
        }
```

## Structure of the config json
```
"data" als main element
 -> Eigenschaft "type": values: radio, checkbox
 -> Array "item"
     -> Eigenschaft "head"
         -> Eigenschaften: 
              -> "color": value Hex
              -> "bgcolor": value Hex
              -> "text": value String
              -> "stars": value int
     -> Eingeschaft "rows"
         -> Eigenschaften: 
             -> "color": value Hex
             -> "bgcolor": value Hex
             -> "text" value string
         -> array row
             -> Eingeschaften: 
                 -> "icon" values yes, no
                 -> "text": value string
```

## Contribute
You can contribute with GitHub via Pull Request on this project and we will review and add you changes.
For more information, please read the [LICENCE](https://github.com/Digital-A-TEAM/jotform-widget-card-select/blob/main/LICENSE)

## Issues and Errors
If you have any problems, errors or feature request, tell  us through the [Issues](https://github.com/Digital-A-TEAM/jotform-widget-image-picker/issues). 
