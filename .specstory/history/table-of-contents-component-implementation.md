## SpecStory

## Table of Contents Component Implementation (1/19/2025, 4:24:19 PM)

_**User**_

let's implement the table of content component. here is the design: 
{
  "id": "6939:8662",
  "name": "Group 1",
  "type": "GROUP",
  "x": 0,
  "y": 0,
  "width": 275,
  "height": 1024,
  "relativeTransform": [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ]
  ],
  "effects": [],
  "blendMode": "PASS_THROUGH",
  "layoutAlign": "INHERIT",
  "layoutGrow": 0,
  "children": [
    {
      "id": "6905:14604",
      "name": "TOC Wrapper",
      "type": "INSTANCE",
      "x": 0,
      "y": 0,
      "width": 275,
      "height": 1024,
      "relativeTransform": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ]
      ],
      "constraints": {
        "horizontal": "MIN",
        "vertical": "MIN"
      },
      "fills": [
        {
          "type": "SOLID",
          "visible": true,
          "opacity": 1,
          "blendMode": "NORMAL",
          "color": {
            "r": 0.9647058844566345,
            "g": 0.9725490212440491,
            "b": 0.9803921580314636
          },
          "boundVariables": {}
        }
      ],
      "strokes": [
        {
          "type": "SOLID",
          "visible": true,
          "opacity": 0.10000000149011612,
          "blendMode": "NORMAL",
          "color": {
            "r": 0,
            "g": 0,
            "b": 0
          },
          "boundVariables": {
            "color": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:399:2851"
            }
          }
        }
      ],
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "STRETCH",
      "layoutGrow": 0,
      "layoutMode": "VERTICAL",
      "itemSpacing": 40,
      "children": [
        {
          "id": "I6905:14604;6905:13778",
          "name": "Sidebar Top",
          "type": "FRAME",
          "x": 24,
          "y": 24,
          "width": 227,
          "height": 579.3333129882812,
          "relativeTransform": [
            [
              1,
              0,
              24
            ],
            [
              0,
              1,
              24
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "STRETCH",
          "layoutGrow": 0,
          "layoutMode": "VERTICAL",
          "itemSpacing": 64,
          "children": [
            {
              "id": "I6905:14604;6905:13779",
              "name": "Frame 1171275924",
              "type": "FRAME",
              "x": 0,
              "y": 0,
              "width": 227,
              "height": 55.333335876464844,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "HORIZONTAL",
              "itemSpacing": 10,
              "children": [
                {
                  "id": "I6905:14604;6905:13780",
                  "name": "Logo  (Light)",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 0,
                  "width": 178.43130493164062,
                  "height": 55.333335876464844,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": false,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 1,
                        "g": 1,
                        "b": 1
                      },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1.0641026496887207,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13780;6412:2929",
                      "name": "Logo  (Light)",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 0,
                      "width": 55.333335876464844,
                      "height": 55.333335876464844,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          0
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": false,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1.152777910232544,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 11.527779579162598,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13780;6412:2929;6412:2932",
                          "name": "Frame 1171275846",
                          "type": "FRAME",
                          "x": 0,
                          "y": 0,
                          "width": 55.333335876464844,
                          "height": 55.333335876464844,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1.152777910232544,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 11.527779579162598,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13780;6412:2929;6412:2933",
                              "name": "logo-88",
                              "type": "FRAME",
                              "x": 11.527756690979004,
                              "y": 11.527777671813965,
                              "width": 32.27778244018555,
                              "height": 32.27778244018555,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.527756690979004
                                ],
                                [
                                  0,
                                  1,
                                  11.527777671813965
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": false,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 1,
                                    "g": 1,
                                    "b": 1
                                  },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1.152777910232544,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13780;6412:2929;6412:2934",
                                  "name": "Vector",
                                  "type": "VECTOR",
                                  "x": -0.000013940356438979506,
                                  "y": 0.406315416097641,
                                  "width": 32.27778244018555,
                                  "height": 31.49051284790039,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      -0.000013940356438979506
                                    ],
                                    [
                                      0,
                                      1,
                                      0.406315416097641
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.05098039284348488,
                                        "g": 0.14509804546833038,
                                        "b": 1
                                      },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "strokeWeight": 1.152777910232544,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13780;6412:2930",
                      "name": "Bright Web",
                      "type": "TEXT",
                      "x": 55.333335876464844,
                      "y": 13.166667938232422,
                      "width": 91,
                      "height": 29,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          55.333335876464844
                        ],
                        [
                          0,
                          1,
                          13.166667938232422
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "strokes": [],
                      "strokeWeight": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13781",
                  "name": "Line Rounded/Sidebar Left",
                  "type": "INSTANCE",
                  "x": 206,
                  "y": 17.166667938232422,
                  "width": 21,
                  "height": 21,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      206
                    ],
                    [
                      0,
                      1,
                      17.166667938232422
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 0.800000011920929,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13781;9612:46212",
                      "name": "Element",
                      "type": "VECTOR",
                      "x": 1.5750000476837158,
                      "y": 1.5750000476837158,
                      "width": 17.850000381469727,
                      "height": 17.850000381469727,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          1.5750000476837158
                        ],
                        [
                          0,
                          1,
                          1.5750000476837158
                        ]
                      ],
                      "constraints": {
                        "horizontal": "SCALE",
                        "vertical": "SCALE"
                      },
                      "fills": [],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.4000000059604645,
                            "g": 0.43529412150382996,
                            "b": 0.5529412031173706
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 1.3000000715255737,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "I6905:14604;6905:13782",
              "name": "Sidebar Links List Wrapper",
              "type": "INSTANCE",
              "x": 0,
              "y": 119.33333587646484,
              "width": 227,
              "height": 460,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  119.33333587646484
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 24,
              "children": [
                {
                  "id": "I6905:14604;6905:13782;9620:53272",
                  "name": "Sidebar List Title Wrapper",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 227,
                  "height": 16,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 10,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13782;9620:53273",
                      "name": "List Title",
                      "type": "TEXT",
                      "x": 10,
                      "y": 0,
                      "width": 146,
                      "height": 16,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          10
                        ],
                        [
                          0,
                          1,
                          0
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.7291051745414734,
                            "g": 0.7545182704925537,
                            "b": 0.7989909052848816
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:fb969578717bb1d8bde5dab41fa5162c78b51742/10193:23"
                            }
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14604;6905:13782;9843:78478",
                      "name": "Badge",
                      "type": "FRAME",
                      "x": 184,
                      "y": 0,
                      "width": 54,
                      "height": 21,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          184
                        ],
                        [
                          0,
                          1,
                          0
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.8901960849761963,
                            "g": 0.9019607901573181,
                            "b": 0.9176470637321472
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:a69438fb1409c44180c33516b775715372e02170/10208:50"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.800000011920929,
                      "cornerRadius": 24,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9843:78479",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 5,
                          "y": 3,
                          "width": 44,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              5
                            ],
                            [
                              0,
                              1,
                              3
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.7291051745414734,
                                "g": 0.7545182704925537,
                                "b": 0.7989909052848816
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:fb969578717bb1d8bde5dab41fa5162c78b51742/10193:23"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13782;9843:78480",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 64,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              64
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9843:78480;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9843:78480;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13782;9620:53274",
                  "name": "Links List",
                  "type": "FRAME",
                  "x": 0,
                  "y": 40,
                  "width": 227,
                  "height": 420,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      40
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "VERTICAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13782;9620:53275",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 0,
                      "width": 227,
                      "height": 52,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          0
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": false,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9411764740943909,
                            "b": 0.9411764740943909
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53275;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 36,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53275;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53275;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 36,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53275;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53275;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13782;9620:53301",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 52,
                      "width": 227,
                      "height": 88,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          52
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53301;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 72,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53301;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53301;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 72,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53301;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53301;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13782;9620:53312",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 140,
                      "width": 227,
                      "height": 70,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          140
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53312;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 54,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53312;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53312;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 54,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53312;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53312;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13782;9620:53323",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 210,
                      "width": 227,
                      "height": 70,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          210
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53323;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 54,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53323;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53323;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 54,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53323;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53323;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13782;9620:53334",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 280,
                      "width": 227,
                      "height": 70,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          280
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53334;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 54,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53334;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53334;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 54,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53334;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53334;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13782;9620:53345",
                      "name": "Sidebar Link Item",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 350,
                      "width": 227,
                      "height": 70,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          350
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 8,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13782;9620:53345;9612:40760",
                          "name": "Text Wrapper",
                          "type": "FRAME",
                          "x": 12,
                          "y": 8,
                          "width": 205,
                          "height": 54,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              12
                            ],
                            [
                              0,
                              1,
                              8
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 8,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53345;9612:40761",
                              "name": "Line Rounded/Message",
                              "type": "INSTANCE",
                              "x": 0,
                              "y": 1,
                              "width": 16,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  1
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 0.800000011920929,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111929",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 7.802380561828613,
                                  "y": 7.796679973602295,
                                  "width": 0.1984744817018509,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      7.802380561828613
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111930",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.358557224273682,
                                  "y": 7.796679973602295,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.358557224273682
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111931",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.25177001953125,
                                  "y": 7.796679973602295,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.25177001953125
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796679973602295
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111932",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111933",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 8.005551159381866,
                                      "y": 7.796676933765411,
                                      "width": 0.20007450878620148,
                                      "height": 0.4065381586551666,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          8.005551159381866
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111934",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 4.556540071964264,
                                      "y": 7.796676933765411,
                                      "width": 0.19687329232692719,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          4.556540071964264
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111935",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 11.449386417865753,
                                      "y": 7.796676933765411,
                                      "width": 0.19687360525131226,
                                      "height": 0.40013623237609863,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          11.449386417865753
                                        ],
                                        [
                                          0,
                                          1,
                                          7.796676933765411
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    },
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40761;9629:111936",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.800000011920929,
                                      "y": 0.797558605670929,
                                      "width": 14.40000057220459,
                                      "height": 14.404891967773438,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.800000011920929
                                        ],
                                        [
                                          0,
                                          1,
                                          0.797558605670929
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.4000000059604645,
                                            "g": 0.43529412150382996,
                                            "b": 0.5529412031173706
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.399999976158142,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53345;9612:40762",
                              "name": "Placeholder",
                              "type": "TEXT",
                              "x": 0,
                              "y": 0,
                              "width": 205,
                              "height": 54,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0
                                ],
                                [
                                  0,
                                  1,
                                  0
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "STRETCH",
                              "layoutGrow": 1,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13782;9620:53345;9612:40763",
                          "name": "Badge",
                          "type": "INSTANCE",
                          "x": 202,
                          "y": 7.5,
                          "width": 36,
                          "height": 28,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              202
                            ],
                            [
                              0,
                              1,
                              7.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 1,
                                "g": 1,
                                "b": 1
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                                }
                              }
                            }
                          ],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.9411764740943909,
                                "g": 0.9490196108818054,
                                "b": 0.9607843160629272
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                                }
                              }
                            }
                          ],
                          "strokeWeight": 0.5,
                          "cornerRadius": 4,
                          "effects": [
                            {
                              "type": "DROP_SHADOW",
                              "radius": 3,
                              "visible": true,
                              "boundVariables": {},
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305,
                                "a": 0.10000000149011612
                              },
                              "offset": {
                                "x": 0,
                                "y": 1
                              },
                              "spread": 0,
                              "blendMode": "NORMAL",
                              "showShadowBehindNode": false
                            }
                          ],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 4,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36622",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 7.5,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.5
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36622;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36622;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7047:106961",
                              "name": "Button Text",
                              "type": "TEXT",
                              "x": 22.5,
                              "y": 6,
                              "width": 6,
                              "height": 16,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  22.5
                                ],
                                [
                                  0,
                                  1,
                                  6
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 1,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36620",
                              "name": "Line Rounded/Command",
                              "type": "INSTANCE",
                              "x": 67,
                              "y": 8.5,
                              "width": 11,
                              "height": 11,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  67
                                ],
                                [
                                  0,
                                  1,
                                  8.5
                                ]
                              ],
                              "constraints": {
                                "horizontal": "MIN",
                                "vertical": "MIN"
                              },
                              "fills": [],
                              "strokes": [],
                              "strokeWeight": 1,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "itemSpacing": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36620;9612:40090",
                                  "name": "Element",
                                  "type": "GROUP",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": [
                                    {
                                      "id": "I6905:14604;6905:13782;9620:53345;9612:40763;7231:36620;9612:40091",
                                      "name": "Element",
                                      "type": "VECTOR",
                                      "x": 0.8250000476837158,
                                      "y": 0.8250000476837158,
                                      "width": 9.350000381469727,
                                      "height": 9.350000381469727,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          0.8250000476837158
                                        ],
                                        [
                                          0,
                                          1,
                                          0.8250000476837158
                                        ]
                                      ],
                                      "constraints": {
                                        "horizontal": "SCALE",
                                        "vertical": "SCALE"
                                      },
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "type": "SOLID",
                                          "visible": true,
                                          "opacity": 1,
                                          "blendMode": "NORMAL",
                                          "color": {
                                            "r": 0.09803921729326248,
                                            "g": 0.12941177189350128,
                                            "b": 0.239215686917305
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                            }
                                          }
                                        }
                                      ],
                                      "strokeWeight": 1.2000000476837158,
                                      "cornerRadius": 0,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "INHERIT",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13782;10046:49896",
                  "name": "Gradient",
                  "type": "GROUP",
                  "x": 0.21875,
                  "y": 342.896484375,
                  "width": 259,
                  "height": 116.8980712890625,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0.21875
                    ],
                    [
                      0,
                      1,
                      342.896484375
                    ]
                  ],
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13782;10046:49897",
                      "name": "Gradient Mask",
                      "type": "RECTANGLE",
                      "x": 0.21875,
                      "y": 342.896484375,
                      "width": 259,
                      "height": 116.8980712890625,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0.21875
                        ],
                        [
                          0,
                          1,
                          342.896484375
                        ]
                      ],
                      "constraints": {
                        "horizontal": "STRETCH",
                        "vertical": "STRETCH"
                      },
                      "fills": [
                        {
                          "type": "GRADIENT_LINEAR",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "gradientStops": [
                            {
                              "color": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "a": 0
                              },
                              "position": 0,
                              "boundVariables": {}
                            },
                            {
                              "color": {
                                "r": 0,
                                "g": 0,
                                "b": 0,
                                "a": 1
                              },
                              "position": 1,
                              "boundVariables": {}
                            }
                          ],
                          "gradientTransform": [
                            [
                              6.123234262925839e-17,
                              1,
                              0
                            ],
                            [
                              -1,
                              6.123234262925839e-17,
                              1
                            ]
                          ]
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14604;6905:13782;10046:49898",
                      "name": "Color",
                      "type": "RECTANGLE",
                      "x": 0.21875,
                      "y": 342.896484375,
                      "width": 259,
                      "height": 116.8980712890625,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0.21875
                        ],
                        [
                          0,
                          1,
                          342.896484375
                        ]
                      ],
                      "constraints": {
                        "horizontal": "STRETCH",
                        "vertical": "STRETCH"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9686274528503418,
                            "g": 0.9725490212440491,
                            "b": 0.9803921580314636
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:9ff1a9af11ce9b1c5e2c7aeefa949c84c71b6571/10175:2897"
                            }
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "I6905:14604;6905:13783",
          "name": "Sidebar Links List Wrapper",
          "type": "INSTANCE",
          "x": 24,
          "y": 643,
          "width": 248,
          "height": 301,
          "relativeTransform": [
            [
              1,
              0,
              24
            ],
            [
              0,
              1,
              643
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "STRETCH",
          "layoutGrow": 0,
          "layoutMode": "VERTICAL",
          "itemSpacing": 12,
          "children": [
            {
              "id": "I6905:14604;6905:13783;9620:53272",
              "name": "Sidebar List Title Wrapper",
              "type": "FRAME",
              "x": 0,
              "y": 0,
              "width": 248,
              "height": 21,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  0
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "HORIZONTAL",
              "itemSpacing": 10,
              "children": [
                {
                  "id": "I6905:14604;6905:13783;9620:53273",
                  "name": "List Title",
                  "type": "TEXT",
                  "x": 10,
                  "y": 2.5,
                  "width": 102,
                  "height": 16,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      10
                    ],
                    [
                      0,
                      1,
                      2.5
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.7291051745414734,
                        "g": 0.7545182704925537,
                        "b": 0.7989909052848816
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:fb969578717bb1d8bde5dab41fa5162c78b51742/10193:23"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                },
                {
                  "id": "I6905:14604;6905:13783;9843:78478",
                  "name": "Badge",
                  "type": "FRAME",
                  "x": 184,
                  "y": 0,
                  "width": 54,
                  "height": 21,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      184
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 1,
                        "g": 1,
                        "b": 1
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                        }
                      }
                    }
                  ],
                  "strokes": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.8901960849761963,
                        "g": 0.9019607901573181,
                        "b": 0.9176470637321472
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:a69438fb1409c44180c33516b775715372e02170/10208:50"
                        }
                      }
                    }
                  ],
                  "strokeWeight": 0.800000011920929,
                  "cornerRadius": 24,
                  "effects": [
                    {
                      "type": "DROP_SHADOW",
                      "radius": 3,
                      "visible": true,
                      "boundVariables": {},
                      "color": {
                        "r": 0.09803921729326248,
                        "g": 0.12941177189350128,
                        "b": 0.239215686917305,
                        "a": 0.10000000149011612
                      },
                      "offset": {
                        "x": 0,
                        "y": 1
                      },
                      "spread": 0,
                      "blendMode": "NORMAL",
                      "showShadowBehindNode": false
                    }
                  ],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 4,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9843:78479",
                      "name": "Button Text",
                      "type": "TEXT",
                      "x": 5,
                      "y": 3,
                      "width": 44,
                      "height": 16,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          5
                        ],
                        [
                          0,
                          1,
                          3
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.7291051745414734,
                            "g": 0.7545182704925537,
                            "b": 0.7989909052848816
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:fb969578717bb1d8bde5dab41fa5162c78b51742/10193:23"
                            }
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14604;6905:13783;9843:78480",
                      "name": "Line Rounded/Command",
                      "type": "INSTANCE",
                      "x": 64,
                      "y": 8.5,
                      "width": 11,
                      "height": 11,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          64
                        ],
                        [
                          0,
                          1,
                          8.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "itemSpacing": 0,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9843:78480;9612:40090",
                          "name": "Element",
                          "type": "GROUP",
                          "x": 0.8250000476837158,
                          "y": 0.8250000476837158,
                          "width": 9.350000381469727,
                          "height": 9.350000381469727,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0.8250000476837158
                            ],
                            [
                              0,
                              1,
                              0.8250000476837158
                            ]
                          ],
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9843:78480;9612:40091",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.09803921729326248,
                                    "g": 0.12941177189350128,
                                    "b": 0.239215686917305
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.2000000476837158,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "I6905:14604;6905:13783;9620:53274",
              "name": "Links List",
              "type": "FRAME",
              "x": 0,
              "y": 33,
              "width": 248,
              "height": 268,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  33
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 2,
              "children": [
                {
                  "id": "I6905:14604;6905:13783;9620:53275",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 0,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      0
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53275;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53275;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53275;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53275;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53275;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13783;9620:53301",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 45,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      45
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53301;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53301;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53301;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53301;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53301;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13783;9620:53312",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 90,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      90
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53312;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53312;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53312;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53312;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53312;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13783;9620:53323",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 135,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      135
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53323;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53323;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53323;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53323;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53323;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13783;9620:53334",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 180,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      180
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53334;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53334;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53334;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53334;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53334;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "I6905:14604;6905:13783;9620:53345",
                  "name": "Sidebar Link Item",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 225,
                  "width": 248,
                  "height": 43,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      225
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 8,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14604;6905:13783;9620:53345;9612:40760",
                      "name": "Text Wrapper",
                      "type": "FRAME",
                      "x": 12,
                      "y": 12.5,
                      "width": 190,
                      "height": 18,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          12
                        ],
                        [
                          0,
                          1,
                          12.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "strokeWeight": 1,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 1,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53345;9612:40761",
                          "name": "Line Rounded/Message",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 1,
                          "width": 16,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              1
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 0.800000011920929,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111929",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 7.802380561828613,
                              "y": 7.796679973602295,
                              "width": 0.1984744817018509,
                              "height": 0.4065381586551666,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  7.802380561828613
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111930",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 4.358557224273682,
                              "y": 7.796679973602295,
                              "width": 0.19687329232692719,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  4.358557224273682
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111931",
                              "name": "Element",
                              "type": "VECTOR",
                              "x": 11.25177001953125,
                              "y": 7.796679973602295,
                              "width": 0.19687360525131226,
                              "height": 0.40013623237609863,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  11.25177001953125
                                ],
                                [
                                  0,
                                  1,
                                  7.796679973602295
                                ]
                              ],
                              "constraints": {
                                "horizontal": "SCALE",
                                "vertical": "SCALE"
                              },
                              "fills": [],
                              "strokes": [
                                {
                                  "type": "SOLID",
                                  "visible": true,
                                  "opacity": 1,
                                  "blendMode": "NORMAL",
                                  "color": {
                                    "r": 0.4000000059604645,
                                    "g": 0.43529412150382996,
                                    "b": 0.5529412031173706
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                    }
                                  }
                                }
                              ],
                              "strokeWeight": 1.399999976158142,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            },
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111932",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.800000011920929,
                              "y": 0.797558605670929,
                              "width": 14.40000057220459,
                              "height": 14.404891967773438,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.800000011920929
                                ],
                                [
                                  0,
                                  1,
                                  0.797558605670929
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111933",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 8.005551159381866,
                                  "y": 7.796676933765411,
                                  "width": 0.20007450878620148,
                                  "height": 0.4065381586551666,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      8.005551159381866
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111934",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 4.556540071964264,
                                  "y": 7.796676933765411,
                                  "width": 0.19687329232692719,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      4.556540071964264
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111935",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 11.449386417865753,
                                  "y": 7.796676933765411,
                                  "width": 0.19687360525131226,
                                  "height": 0.40013623237609863,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      11.449386417865753
                                    ],
                                    [
                                      0,
                                      1,
                                      7.796676933765411
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40761;9629:111936",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.800000011920929,
                                  "y": 0.797558605670929,
                                  "width": 14.40000057220459,
                                  "height": 14.404891967773438,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.800000011920929
                                    ],
                                    [
                                      0,
                                      1,
                                      0.797558605670929
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.4000000059604645,
                                        "g": 0.43529412150382996,
                                        "b": 0.5529412031173706
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:e5c7f5a33306d56acbe342396c303615f72bb6ee/10175:2760"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.399999976158142,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53345;9612:40762",
                          "name": "Placeholder",
                          "type": "TEXT",
                          "x": 24,
                          "y": 0,
                          "width": 166,
                          "height": 18,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24
                            ],
                            [
                              0,
                              1,
                              0
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.4000000059604645,
                                "g": 0.43529412150382996,
                                "b": 0.5529412031173706
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:8974c892fae762f1818ec0368f11cbe59e85d063/10207:98"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 1,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "I6905:14604;6905:13783;9620:53345;9612:40763",
                      "name": "Badge",
                      "type": "INSTANCE",
                      "x": 202,
                      "y": 7.5,
                      "width": 36,
                      "height": 28,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          202
                        ],
                        [
                          0,
                          1,
                          7.5
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 1,
                            "g": 1,
                            "b": 1
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:26b584282e56435099c9efb7f5d97f29e8baedb0/10175:2658"
                            }
                          }
                        }
                      ],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.9411764740943909,
                            "g": 0.9490196108818054,
                            "b": 0.9607843160629272
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:dc6ca509100bd80ffe044f88b5ab4d43a1115d52/10175:2783"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.5,
                      "cornerRadius": 4,
                      "effects": [
                        {
                          "type": "DROP_SHADOW",
                          "radius": 3,
                          "visible": true,
                          "boundVariables": {},
                          "color": {
                            "r": 0.09803921729326248,
                            "g": 0.12941177189350128,
                            "b": 0.239215686917305,
                            "a": 0.10000000149011612
                          },
                          "offset": {
                            "x": 0,
                            "y": 1
                          },
                          "spread": 0,
                          "blendMode": "NORMAL",
                          "showShadowBehindNode": false
                        }
                      ],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 4,
                      "children": [
                        {
                          "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36622",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 7.5,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              7.5
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36622;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36622;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7047:106961",
                          "name": "Button Text",
                          "type": "TEXT",
                          "x": 22.5,
                          "y": 6,
                          "width": 6,
                          "height": 16,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              22.5
                            ],
                            [
                              0,
                              1,
                              6
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09803921729326248,
                                "g": 0.12941177189350128,
                                "b": 0.239215686917305
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:eb08ea852e91ea67a981fb29dd476948956b2c2e/10175:2855"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 1,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36620",
                          "name": "Line Rounded/Command",
                          "type": "INSTANCE",
                          "x": 67,
                          "y": 8.5,
                          "width": 11,
                          "height": 11,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              67
                            ],
                            [
                              0,
                              1,
                              8.5
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [],
                          "strokeWeight": 1,
                          "cornerRadius": 0,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36620;9612:40090",
                              "name": "Element",
                              "type": "GROUP",
                              "x": 0.8250000476837158,
                              "y": 0.8250000476837158,
                              "width": 9.350000381469727,
                              "height": 9.350000381469727,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  0.8250000476837158
                                ],
                                [
                                  0,
                                  1,
                                  0.8250000476837158
                                ]
                              ],
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": [
                                {
                                  "id": "I6905:14604;6905:13783;9620:53345;9612:40763;7231:36620;9612:40091",
                                  "name": "Element",
                                  "type": "VECTOR",
                                  "x": 0.8250000476837158,
                                  "y": 0.8250000476837158,
                                  "width": 9.350000381469727,
                                  "height": 9.350000381469727,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      0.8250000476837158
                                    ],
                                    [
                                      0,
                                      1,
                                      0.8250000476837158
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "SCALE",
                                    "vertical": "SCALE"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 1,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0.09803921729326248,
                                        "g": 0.12941177189350128,
                                        "b": 0.239215686917305
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:4228adcfa13f0de992be582c8835c79f476bfb6e/10175:2884"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1.2000000476837158,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "I6905:14604;6905:13783;10046:49896",
              "name": "Gradient",
              "type": "GROUP",
              "x": 0.21875,
              "y": 183.896484375,
              "width": 248,
              "height": 116.8980712890625,
              "relativeTransform": [
                [
                  1,
                  0,
                  0.21875
                ],
                [
                  0,
                  1,
                  183.896484375
                ]
              ],
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "children": [
                {
                  "id": "I6905:14604;6905:13783;10046:49897",
                  "name": "Gradient Mask",
                  "type": "RECTANGLE",
                  "x": 0.21875,
                  "y": 183.896484375,
                  "width": 248,
                  "height": 116.8980712890625,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0.21875
                    ],
                    [
                      0,
                      1,
                      183.896484375
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "STRETCH"
                  },
                  "fills": [
                    {
                      "type": "GRADIENT_LINEAR",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "gradientStops": [
                        {
                          "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 0
                          },
                          "position": 0,
                          "boundVariables": {}
                        },
                        {
                          "color": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                          },
                          "position": 1,
                          "boundVariables": {}
                        }
                      ],
                      "gradientTransform": [
                        [
                          6.123234262925839e-17,
                          1,
                          0
                        ],
                        [
                          -1,
                          6.123234262925839e-17,
                          1
                        ]
                      ]
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                },
                {
                  "id": "I6905:14604;6905:13783;10046:49898",
                  "name": "Color",
                  "type": "RECTANGLE",
                  "x": 0.21875,
                  "y": 183.896484375,
                  "width": 248,
                  "height": 116.8980712890625,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0.21875
                    ],
                    [
                      0,
                      1,
                      183.896484375
                    ]
                  ],
                  "constraints": {
                    "horizontal": "STRETCH",
                    "vertical": "STRETCH"
                  },
                  "fills": [
                    {
                      "type": "SOLID",
                      "visible": true,
                      "opacity": 1,
                      "blendMode": "NORMAL",
                      "color": {
                        "r": 0.9686274528503418,
                        "g": 0.9725490212440491,
                        "b": 0.9803921580314636
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:9ff1a9af11ce9b1c5e2c7aeefa949c84c71b6571/10175:2897"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

---

_**Assistant**_



---



---

