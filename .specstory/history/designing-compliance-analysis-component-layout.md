## SpecStory

## Designing Compliance Analysis Component Layout (12/20/2024, 6:49:51 AM)

_**User**_

We need to create this layout. Let's work incrementally. Let's create the compliance analysis component (the right side pane): Implement it based on this design: 
{
  "id": "6905:14742",
  "name": "Message Settings",
  "type": "FRAME",
  "x": 1068,
  "y": 101,
  "width": 372,
  "height": 1063.0740966796875,
  "relativeTransform": [
    [
      1,
      0,
      1068
    ],
    [
      0,
      1,
      101
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
          "id": "VariableID:399:2862"
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
  "cornerRadius": 0,
  "effects": [
    {
      "type": "DROP_SHADOW",
      "radius": 12.100000381469727,
      "visible": true,
      "boundVariables": {},
      "color": {
        "r": 0.2078431397676468,
        "g": 0.24313725531101227,
        "b": 0.3607843220233917,
        "a": 0.07000000029802322
      },
      "offset": {
        "x": 0,
        "y": 0
      },
      "spread": 0,
      "blendMode": "NORMAL",
      "showShadowBehindNode": false
    }
  ],
  "blendMode": "PASS_THROUGH",
  "layoutAlign": "STRETCH",
  "layoutGrow": 0,
  "layoutMode": "VERTICAL",
  "itemSpacing": 23,
  "children": [
    {
      "id": "6905:14743",
      "name": "Frame 1171275926",
      "type": "FRAME",
      "x": 24,
      "y": 40,
      "width": 324,
      "height": 22,
      "relativeTransform": [
        [
          1,
          0,
          24
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
      "itemSpacing": 12,
      "children": [
        {
          "id": "6905:14744",
          "name": "Your Compliance Score: 85%",
          "type": "TEXT",
          "x": 0,
          "y": 0,
          "width": 324,
          "height": 22,
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
                "r": 0.30588236451148987,
                "g": 0.3803921639919281,
                "b": 0.9647058844566345
              },
              "boundVariables": {
                "color": {
                  "type": "VARIABLE_ALIAS",
                  "id": "VariableID:397:2849"
                }
              }
            }
          ],
          "strokes": [],
          "strokeWeight": 1.0206657648086548,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "STRETCH",
          "layoutGrow": 0,
          "children": []
        },
        {
          "id": "6905:14745",
          "name": "List Title",
          "type": "TEXT",
          "x": 0,
          "y": 34,
          "width": 268,
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
              34
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
        }
      ]
    },
    {
      "id": "6905:14746",
      "name": "Divider",
      "type": "LINE",
      "x": 24,
      "y": 85,
      "width": 324,
      "height": 0,
      "relativeTransform": [
        [
          1,
          0,
          24
        ],
        [
          0,
          1,
          85
        ]
      ],
      "constraints": {
        "horizontal": "MIN",
        "vertical": "MIN"
      },
      "fills": [],
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
              "id": "VariableID:f21f9ad728a7dcd1d1f202dddee2a60aaddf121a/10175:2845"
            }
          }
        }
      ],
      "strokeWeight": 1,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "STRETCH",
      "layoutGrow": 0,
      "children": []
    },
    {
      "id": "6905:14747",
      "name": "Frame 1000006777",
      "type": "FRAME",
      "x": 24,
      "y": 108,
      "width": 324,
      "height": 90,
      "relativeTransform": [
        [
          1,
          0,
          24
        ],
        [
          0,
          1,
          108
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
      "itemSpacing": 10,
      "children": [
        {
          "id": "6905:14748",
          "name": "Sidebar Item Wrapper",
          "type": "FRAME",
          "x": 0,
          "y": 0,
          "width": 324,
          "height": 40,
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
                "r": 1,
                "g": 0.962451159954071,
                "b": 0.9630769491195679
              },
              "boundVariables": {}
            }
          ],
          "strokes": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 1,
                "g": 0.574999988079071,
                "b": 0.5820833444595337
              },
              "boundVariables": {}
            }
          ],
          "strokeWeight": 1,
          "cornerRadius": 6,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "HORIZONTAL",
          "itemSpacing": 0,
          "children": [
            {
              "id": "6905:14749",
              "name": "Content Wrapper",
              "type": "FRAME",
              "x": 16,
              "y": 12,
              "width": 292,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  16
                ],
                [
                  0,
                  1,
                  12
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
                  "id": "6905:14750",
                  "name": "info-empty",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 2,
                  "width": 12,
                  "height": 12,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      2
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 0.6000000238418579,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14750;78:1284",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 6.004980564117432,
                      "y": 6.250049114227295,
                      "width": 0,
                      "height": 2.500000238418579,
                      "relativeTransform": [
                        [
                          -1,
                          1.0490732194057273e-7,
                          6.004980564117432
                        ],
                        [
                          -7.285231617970567e-8,
                          -1,
                          6.250049114227295
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14750;78:1285",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 6.004980564117432,
                      "y": 8.25,
                      "width": 0.0050004953518509865,
                      "height": 0.004999923519790173,
                      "relativeTransform": [
                        [
                          -1,
                          8.743278101519536e-8,
                          6.004980564117432
                        ],
                        [
                          -8.741277213175636e-8,
                          -1,
                          8.25
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14750;78:1286",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 0.9999023675918579,
                      "y": 1.0000488758087158,
                      "width": 10.000000953674316,
                      "height": 10.000000953674316,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0.9999023675918579
                        ],
                        [
                          0,
                          1,
                          1.0000488758087158
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "6905:14751",
                  "name": "Text Wrapper",
                  "type": "FRAME",
                  "x": 20,
                  "y": 0,
                  "width": 129,
                  "height": 16,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      20
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
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "VERTICAL",
                  "itemSpacing": 2,
                  "children": [
                    {
                      "id": "6905:14752",
                      "name": "Title Wrapper",
                      "type": "FRAME",
                      "x": 0,
                      "y": 0,
                      "width": 129,
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
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 6,
                      "children": [
                        {
                          "id": "6905:14753",
                          "name": "Title",
                          "type": "TEXT",
                          "x": 0,
                          "y": 0,
                          "width": 129,
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
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09697917103767395,
                                "g": 0.12789376080036163,
                                "b": 0.23749999701976776
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:f64254b09270d83f9c15742a9673e4be2b00e011/10208:12"
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
                        }
                      ]
                    },
                    {
                      "id": "6905:14754",
                      "name": "Description",
                      "type": "TEXT",
                      "x": 0,
                      "y": 18,
                      "width": 203.36328125,
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
                          18
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
          "id": "6905:14755",
          "name": "Sidebar Item Wrapper",
          "type": "FRAME",
          "x": 0,
          "y": 50,
          "width": 324,
          "height": 40,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              50
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
                "g": 0.962451159954071,
                "b": 0.9630769491195679
              },
              "boundVariables": {}
            }
          ],
          "strokes": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 1,
                "g": 0.574999988079071,
                "b": 0.5820833444595337
              },
              "boundVariables": {}
            }
          ],
          "strokeWeight": 1,
          "cornerRadius": 6,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "HORIZONTAL",
          "itemSpacing": 0,
          "children": [
            {
              "id": "6905:14756",
              "name": "Content Wrapper",
              "type": "FRAME",
              "x": 16,
              "y": 12,
              "width": 292,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  16
                ],
                [
                  0,
                  1,
                  12
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
                  "id": "6905:14757",
                  "name": "info-empty",
                  "type": "INSTANCE",
                  "x": 0,
                  "y": 2,
                  "width": 12,
                  "height": 12,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      2
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 0.6000000238418579,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "NONE",
                  "itemSpacing": 0,
                  "children": [
                    {
                      "id": "I6905:14757;78:1284",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 6.004980564117432,
                      "y": 6.250049114227295,
                      "width": 0,
                      "height": 2.500000238418579,
                      "relativeTransform": [
                        [
                          -1,
                          1.0490732194057273e-7,
                          6.004980564117432
                        ],
                        [
                          -7.285231617970567e-8,
                          -1,
                          6.250049114227295
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14757;78:1285",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 6.004980564117432,
                      "y": 8.25,
                      "width": 0.0050004953518509865,
                      "height": 0.004999923519790173,
                      "relativeTransform": [
                        [
                          -1,
                          8.743278101519536e-8,
                          6.004980564117432
                        ],
                        [
                          -8.741277213175636e-8,
                          -1,
                          8.25
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    },
                    {
                      "id": "I6905:14757;78:1286",
                      "name": "Vector",
                      "type": "VECTOR",
                      "x": 0.9999023675918579,
                      "y": 1.0000488758087158,
                      "width": 10.000000953674316,
                      "height": 10.000000953674316,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0.9999023675918579
                        ],
                        [
                          0,
                          1,
                          1.0000488758087158
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
                            "r": 0.9333333373069763,
                            "g": 0.2666666805744171,
                            "b": 0.24705882370471954
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:404:2849"
                            }
                          }
                        }
                      ],
                      "strokeWeight": 0.9000000357627869,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "6905:14758",
                  "name": "Text Wrapper",
                  "type": "FRAME",
                  "x": 20,
                  "y": 0,
                  "width": 191,
                  "height": 16,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      20
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
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "VERTICAL",
                  "itemSpacing": 2,
                  "children": [
                    {
                      "id": "6905:14759",
                      "name": "Title Wrapper",
                      "type": "FRAME",
                      "x": 0,
                      "y": 0,
                      "width": 191,
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
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 6,
                      "children": [
                        {
                          "id": "6905:14760",
                          "name": "Title",
                          "type": "TEXT",
                          "x": 0,
                          "y": 0,
                          "width": 191,
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
                          "fills": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.09697917103767395,
                                "g": 0.12789376080036163,
                                "b": 0.23749999701976776
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:f64254b09270d83f9c15742a9673e4be2b00e011/10208:12"
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
                        }
                      ]
                    },
                    {
                      "id": "6905:14761",
                      "name": "Description",
                      "type": "TEXT",
                      "x": 0,
                      "y": 18,
                      "width": 203.36328125,
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
                          18
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
      "id": "6905:14762",
      "name": "Frame 1171275927",
      "type": "FRAME",
      "x": 24,
      "y": 221,
      "width": 324,
      "height": 810.0740966796875,
      "relativeTransform": [
        [
          1,
          0,
          24
        ],
        [
          0,
          1,
          221
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
          "id": "6905:14763",
          "name": "Frame 1171275928",
          "type": "FRAME",
          "x": 0,
          "y": 0,
          "width": 324,
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
              "id": "6905:14764",
              "name": "List Title",
              "type": "TEXT",
              "x": 6,
              "y": 0,
              "width": 312,
              "height": 16,
              "relativeTransform": [
                [
                  1,
                  0,
                  6
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
              "layoutGrow": 1,
              "children": []
            }
          ]
        },
        {
          "id": "6905:14765",
          "name": "Compliance conflicts",
          "type": "FRAME",
          "x": 0,
          "y": 28,
          "width": 324,
          "height": 782.0740966796875,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              28
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
                  "id": "VariableID:399:2862"
                }
              }
            }
          ],
          "strokes": [],
          "strokeWeight": 1.3450243473052979,
          "cornerRadius": 10.760194778442383,
          "effects": [
            {
              "type": "DROP_SHADOW",
              "radius": 5.380097389221191,
              "visible": true,
              "boundVariables": {},
              "color": {
                "r": 0.09803921729326248,
                "g": 0.12941177189350128,
                "b": 0.239215686917305,
                "a": 0.07999999821186066
              },
              "offset": {
                "x": 0,
                "y": 2.6900486946105957
              },
              "spread": 0,
              "blendMode": "NORMAL",
              "showShadowBehindNode": false
            }
          ],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "STRETCH",
          "layoutGrow": 0,
          "layoutMode": "VERTICAL",
          "itemSpacing": 12,
          "children": [
            {
              "id": "6905:14766",
              "name": "Text",
              "type": "FRAME",
              "x": 24,
              "y": 14,
              "width": 276,
              "height": 184.8148193359375,
              "relativeTransform": [
                [
                  1,
                  0,
                  24
                ],
                [
                  0,
                  1,
                  14
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 1.3450243473052979,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "INHERIT",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 10,
              "children": [
                {
                  "id": "6905:14767",
                  "name": "Patient Confidentiality - Section 2.3",
                  "type": "TEXT",
                  "x": 0,
                  "y": 0,
                  "width": 276,
                  "height": 23,
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
                        "r": 0.30588236451148987,
                        "g": 0.3803921639919281,
                        "b": 0.9647058844566345
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:397:2849"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1.0882352590560913,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "children": []
                },
                {
                  "id": "6905:14768",
                  "name": "Block Quote Wrapper",
                  "type": "FRAME",
                  "x": 0,
                  "y": 33,
                  "width": 276,
                  "height": 151.8148193359375,
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
                  "strokeWeight": 0.7345678806304932,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "VERTICAL",
                  "itemSpacing": 8.814814567565918,
                  "children": [
                    {
                      "id": "6905:14769",
                      "name": "Block Quote Card",
                      "type": "FRAME",
                      "x": -0.00009042245073942468,
                      "y": 4.407458782196045,
                      "width": 276,
                      "height": 143,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          -0.00009042245073942468
                        ],
                        [
                          0,
                          1,
                          4.407458782196045
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [],
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0,
                      "layoutMode": "VERTICAL",
                      "itemSpacing": 8,
                      "children": [
                        {
                          "id": "6905:14770",
                          "name": "Paragraph",
                          "type": "TEXT",
                          "x": 0,
                          "y": 0,
                          "width": 276,
                          "height": 45,
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
                                "r": 0.9333333373069763,
                                "g": 0.2666666805744171,
                                "b": 0.24705882370471954
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:397:2880"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 0.7345678806304932,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "STRETCH",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "6905:14771",
                          "name": "Frame 1171275929",
                          "type": "FRAME",
                          "x": 0,
                          "y": 53,
                          "width": 276,
                          "height": 90,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              53
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
                              "id": "6905:14772",
                              "name": "Frame 1171275930",
                              "type": "FRAME",
                              "x": 0,
                              "y": 0,
                              "width": 15,
                              "height": 15,
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
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "HORIZONTAL",
                              "itemSpacing": 10,
                              "children": [
                                {
                                  "id": "6905:14773",
                                  "name": "Vector 1",
                                  "type": "VECTOR",
                                  "x": 2,
                                  "y": 2,
                                  "width": 11,
                                  "height": 13,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      2
                                    ],
                                    [
                                      0,
                                      1,
                                      2
                                    ]
                                  ],
                                  "constraints": {
                                    "horizontal": "MIN",
                                    "vertical": "MIN"
                                  },
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 0.20000000298023224,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0,
                                        "g": 0,
                                        "b": 0
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:399:2852"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 1,
                                  "cornerRadius": 0,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 1,
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": "6905:14774",
                              "name": "Paragraph",
                              "type": "TEXT",
                              "x": 25,
                              "y": 0,
                              "width": 251,
                              "height": 90,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  25
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
                                    "r": 0.09697917103767395,
                                    "g": 0.12789376080036163,
                                    "b": 0.23749999701976776
                                  },
                                  "boundVariables": {
                                    "color": {
                                      "type": "VARIABLE_ALIAS",
                                      "id": "VariableID:b2ec9a96cedb2d561c9f066bed5061928a55fce0/10208:12"
                                    }
                                  }
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 0.7345678806304932,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 1,
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
              "id": "6905:14775",
              "name": "Block Quote Wrapper",
              "type": "FRAME",
              "x": 24,
              "y": 210.8148193359375,
              "width": 276,
              "height": 317.629638671875,
              "relativeTransform": [
                [
                  1,
                  0,
                  24
                ],
                [
                  0,
                  1,
                  210.8148193359375
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 0.7345678806304932,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 8.814814567565918,
              "children": [
                {
                  "id": "6905:14776",
                  "name": "Paragraph",
                  "type": "TEXT",
                  "x": -0.00009042245073942468,
                  "y": 4.407458782196045,
                  "width": 276,
                  "height": 15,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      -0.00009042245073942468
                    ],
                    [
                      0,
                      1,
                      4.407458782196045
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
                        "r": 0.30588236451148987,
                        "g": 0.3803921639919281,
                        "b": 0.9647058844566345
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:400:2844"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 0.7345678806304932,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "children": []
                },
                {
                  "id": "6905:14777",
                  "name": "Paragraph",
                  "type": "TEXT",
                  "x": 0,
                  "y": 28.22222328186035,
                  "width": 276,
                  "height": 285,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      28.22222328186035
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
                        "r": 0.09697917103767395,
                        "g": 0.12789376080036163,
                        "b": 0.23749999701976776
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:b2ec9a96cedb2d561c9f066bed5061928a55fce0/10208:12"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 0.7345678806304932,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "children": []
                }
              ]
            },
            {
              "id": "6905:14778",
              "name": "Block Quote Wrapper",
              "type": "FRAME",
              "x": 24,
              "y": 540.4444580078125,
              "width": 276,
              "height": 227.62962341308594,
              "relativeTransform": [
                [
                  1,
                  0,
                  24
                ],
                [
                  0,
                  1,
                  540.4444580078125
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 0.7345678806304932,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 8.814814567565918,
              "children": [
                {
                  "id": "6905:14779",
                  "name": "Paragraph",
                  "type": "TEXT",
                  "x": -0.00009042245073942468,
                  "y": 4.407458782196045,
                  "width": 276,
                  "height": 15,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      -0.00009042245073942468
                    ],
                    [
                      0,
                      1,
                      4.407458782196045
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
                        "r": 0.30588236451148987,
                        "g": 0.3803921639919281,
                        "b": 0.9647058844566345
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:400:2844"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 0.7345678806304932,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "children": []
                },
                {
                  "id": "6905:14780",
                  "name": "Paragraph",
                  "type": "TEXT",
                  "x": 0,
                  "y": 28.22222328186035,
                  "width": 276,
                  "height": 195,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      28.22222328186035
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
                        "r": 0.09697917103767395,
                        "g": 0.12789376080036163,
                        "b": 0.23749999701976776
                      },
                      "boundVariables": {
                        "color": {
                          "type": "VARIABLE_ALIAS",
                          "id": "VariableID:b2ec9a96cedb2d561c9f066bed5061928a55fce0/10208:12"
                        }
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 0.7345678806304932,
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
      "id": "6905:14781",
      "name": "Gradient",
      "type": "GROUP",
      "x": 0,
      "y": 590,
      "width": 372,
      "height": 332,
      "relativeTransform": [
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          590
        ]
      ],
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "children": [
        {
          "id": "6905:14782",
          "name": "Gradient Mask",
          "type": "RECTANGLE",
          "x": 0,
          "y": 590,
          "width": 372,
          "height": 332,
          "relativeTransform": [
            [
              1,
              0,
              0
            ],
            [
              0,
              1,
              590
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
                  "position": 0.4650000035762787,
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
          "id": "6905:14783",
          "name": "Color",
          "type": "RECTANGLE",
          "x": 1.8189894035458565e-12,
          "y": 699.8926239013672,
          "width": 372,
          "height": 222.10723876953125,
          "relativeTransform": [
            [
              1,
              0,
              1.8189894035458565e-12
            ],
            [
              0,
              1,
              699.8926239013672
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
                "r": 1,
                "g": 1,
                "b": 1
              },
              "boundVariables": {
                "color": {
                  "type": "VARIABLE_ALIAS",
                  "id": "VariableID:400:2847"
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
    },
    {
      "id": "6905:14784",
      "name": "Frame",
      "type": "FRAME",
      "x": 24,
      "y": 748,
      "width": 324,
      "height": 149.76205444335938,
      "relativeTransform": [
        [
          1,
          0,
          24
        ],
        [
          0,
          1,
          748
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
          "boundVariables": {}
        }
      ],
      "strokes": [],
      "strokeWeight": 0.688957929611206,
      "cornerRadius": 0,
      "effects": [],
      "blendMode": "PASS_THROUGH",
      "layoutAlign": "INHERIT",
      "layoutGrow": 0,
      "layoutMode": "VERTICAL",
      "itemSpacing": 8.267494201660156,
      "children": [
        {
          "id": "6905:14785",
          "name": "Frame 1171275920",
          "type": "FRAME",
          "x": 24,
          "y": 11.023326873779297,
          "width": 276,
          "height": 22,
          "relativeTransform": [
            [
              1,
              0,
              24
            ],
            [
              0,
              1,
              11.023326873779297
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 0.688957929611206,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "STRETCH",
          "layoutGrow": 0,
          "layoutMode": "VERTICAL",
          "itemSpacing": 6.8895792961120605,
          "children": [
            {
              "id": "6905:14786",
              "name": "Select Pages to Analyze",
              "type": "TEXT",
              "x": 0,
              "y": 0,
              "width": 276,
              "height": 22,
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
                    "r": 0.30588236451148987,
                    "g": 0.3803921639919281,
                    "b": 0.9647058844566345
                  },
                  "boundVariables": {
                    "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:397:2849"
                    }
                  }
                }
              ],
              "strokes": [],
              "strokeWeight": 1.0206657648086548,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "children": []
            }
          ]
        },
        {
          "id": "6905:14787",
          "name": "Frame 1171275921",
          "type": "FRAME",
          "x": 24,
          "y": 41.29082107543945,
          "width": 292.1181335449219,
          "height": 97.4478988647461,
          "relativeTransform": [
            [
              1,
              0,
              24
            ],
            [
              0,
              1,
              41.29082107543945
            ]
          ],
          "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
          },
          "fills": [],
          "strokes": [],
          "strokeWeight": 0.688957929611206,
          "cornerRadius": 0,
          "effects": [],
          "blendMode": "PASS_THROUGH",
          "layoutAlign": "INHERIT",
          "layoutGrow": 0,
          "layoutMode": "VERTICAL",
          "itemSpacing": 0,
          "children": [
            {
              "id": "6905:14788",
              "name": "Frame 1171275922",
              "type": "FRAME",
              "x": 0,
              "y": 13.779158592224121,
              "width": 292.1181335449219,
              "height": 69.88957977294922,
              "relativeTransform": [
                [
                  1,
                  0,
                  0
                ],
                [
                  0,
                  1,
                  13.779158592224121
                ]
              ],
              "constraints": {
                "horizontal": "MIN",
                "vertical": "MIN"
              },
              "fills": [],
              "strokes": [],
              "strokeWeight": 0.688957929611206,
              "cornerRadius": 0,
              "effects": [],
              "blendMode": "PASS_THROUGH",
              "layoutAlign": "STRETCH",
              "layoutGrow": 0,
              "layoutMode": "VERTICAL",
              "itemSpacing": 6.8895792961120605,
              "children": [
                {
                  "id": "6905:14789",
                  "name": "Radio + Text",
                  "type": "FRAME",
                  "x": 0,
                  "y": 0,
                  "width": 116.02332305908203,
                  "height": 17,
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
                  "strokeWeight": 0.688957929611206,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "INHERIT",
                  "layoutGrow": 0,
                  "layoutMode": "HORIZONTAL",
                  "itemSpacing": 11.023326873779297,
                  "children": [
                    {
                      "id": "6905:14790",
                      "name": "Radio",
                      "type": "INSTANCE",
                      "x": 0,
                      "y": 2.000000476837158,
                      "width": 12.999999046325684,
                      "height": 12.999999046325684,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          2.000000476837158
                        ]
                      ],
                      "constraints": {
                        "horizontal": "MIN",
                        "vertical": "MIN"
                      },
                      "fills": [],
                      "strokes": [
                        {
                          "type": "SOLID",
                          "visible": true,
                          "opacity": 1,
                          "blendMode": "NORMAL",
                          "color": {
                            "r": 0.30588236451148987,
                            "g": 0.3803921639919281,
                            "b": 0.9647058844566345
                          },
                          "boundVariables": {}
                        }
                      ],
                      "strokeWeight": 0.8100000023841858,
                      "cornerRadius": 12,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "itemSpacing": 0,
                      "children": []
                    },
                    {
                      "id": "6905:14791",
                      "name": "Analyze All Pages",
                      "type": "TEXT",
                      "x": 24.023326873779297,
                      "y": 0,
                      "width": 92,
                      "height": 17,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          24.023326873779297
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
                            "r": 0.07450980693101883,
                            "g": 0.09803921729326248,
                            "b": 0.15294118225574493
                          },
                          "boundVariables": {
                            "color": {
                              "type": "VARIABLE_ALIAS",
                              "id": "VariableID:399:2865"
                            }
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 0.688957929611206,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "6905:14792",
                  "name": "Frame 1171275923",
                  "type": "FRAME",
                  "x": 0,
                  "y": 23.88957977294922,
                  "width": 292.1181335449219,
                  "height": 46,
                  "relativeTransform": [
                    [
                      1,
                      0,
                      0
                    ],
                    [
                      0,
                      1,
                      23.88957977294922
                    ]
                  ],
                  "constraints": {
                    "horizontal": "MIN",
                    "vertical": "MIN"
                  },
                  "fills": [],
                  "strokes": [],
                  "strokeWeight": 0.688957929611206,
                  "cornerRadius": 0,
                  "effects": [],
                  "blendMode": "PASS_THROUGH",
                  "layoutAlign": "STRETCH",
                  "layoutGrow": 0,
                  "layoutMode": "VERTICAL",
                  "itemSpacing": 12,
                  "children": [
                    {
                      "id": "6905:14793",
                      "name": "Radio + Text",
                      "type": "FRAME",
                      "x": 0,
                      "y": 0,
                      "width": 161.02333068847656,
                      "height": 17,
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
                      "strokeWeight": 0.688957929611206,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 11.023326873779297,
                      "children": [
                        {
                          "id": "6905:14794",
                          "name": "Radio",
                          "type": "INSTANCE",
                          "x": 0,
                          "y": 2,
                          "width": 13,
                          "height": 13,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              0
                            ],
                            [
                              0,
                              1,
                              2
                            ]
                          ],
                          "constraints": {
                            "horizontal": "MIN",
                            "vertical": "MIN"
                          },
                          "fills": [],
                          "strokes": [
                            {
                              "type": "SOLID",
                              "visible": true,
                              "opacity": 1,
                              "blendMode": "NORMAL",
                              "color": {
                                "r": 0.30588236451148987,
                                "g": 0.3803921639919281,
                                "b": 0.9647058844566345
                              },
                              "boundVariables": {}
                            }
                          ],
                          "strokeWeight": 0.8125,
                          "cornerRadius": 54.16666793823242,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "itemSpacing": 0,
                          "children": [
                            {
                              "id": "I6905:14794;80:1764",
                              "name": "Ellipse 1",
                              "type": "ELLIPSE",
                              "x": 3.25,
                              "y": 3.25,
                              "width": 6.5,
                              "height": 6.5,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  3.25
                                ],
                                [
                                  0,
                                  1,
                                  3.25
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
                                    "r": 0.30588236451148987,
                                    "g": 0.3803921639919281,
                                    "b": 0.9647058844566345
                                  },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "strokeWeight": 0.5416666865348816,
                              "cornerRadius": 0,
                              "effects": [],
                              "blendMode": "PASS_THROUGH",
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": "6905:14795",
                          "name": "Specify Page Range: From",
                          "type": "TEXT",
                          "x": 24.023326873779297,
                          "y": 0,
                          "width": 137,
                          "height": 17,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              24.023326873779297
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
                                "r": 0.07450980693101883,
                                "g": 0.09803921729326248,
                                "b": 0.15294118225574493
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:399:2865"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 0.688957929611206,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        }
                      ]
                    },
                    {
                      "id": "6905:14796",
                      "name": "Radio + Text",
                      "type": "FRAME",
                      "x": 0,
                      "y": 29,
                      "width": 235,
                      "height": 17,
                      "relativeTransform": [
                        [
                          1,
                          0,
                          0
                        ],
                        [
                          0,
                          1,
                          29
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
                      "strokeWeight": 0.688957929611206,
                      "cornerRadius": 0,
                      "effects": [],
                      "blendMode": "PASS_THROUGH",
                      "layoutAlign": "INHERIT",
                      "layoutGrow": 0,
                      "layoutMode": "HORIZONTAL",
                      "itemSpacing": 12,
                      "children": [
                        {
                          "id": "6905:14797",
                          "name": "Specify Page Range:",
                          "type": "TEXT",
                          "x": 0,
                          "y": 0,
                          "width": 102,
                          "height": 17,
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
                                "r": 0.07450980693101883,
                                "g": 0.09803921729326248,
                                "b": 0.15294118225574493
                              },
                              "boundVariables": {
                                "color": {
                                  "type": "VARIABLE_ALIAS",
                                  "id": "VariableID:399:2865"
                                }
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 0.688957929611206,
                          "effects": [],
                          "blendMode": "PASS_THROUGH",
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "children": []
                        },
                        {
                          "id": "6905:14798",
                          "name": "Frame 1171275935",
                          "type": "FRAME",
                          "x": 114,
                          "y": 0,
                          "width": 121,
                          "height": 17,
                          "relativeTransform": [
                            [
                              1,
                              0,
                              114
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
                          "layoutAlign": "INHERIT",
                          "layoutGrow": 0,
                          "layoutMode": "HORIZONTAL",
                          "itemSpacing": 11,
                          "children": [
                            {
                              "id": "6905:14799",
                              "name": "Frame 1171275933",
                              "type": "FRAME",
                              "x": 0,
                              "y": 0,
                              "width": 61,
                              "height": 17,
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
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "HORIZONTAL",
                              "itemSpacing": 6,
                              "children": [
                                {
                                  "id": "6905:14800",
                                  "name": "From",
                                  "type": "TEXT",
                                  "x": 0,
                                  "y": 0,
                                  "width": 25,
                                  "height": 17,
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
                                        "r": 0.07450980693101883,
                                        "g": 0.09803921729326248,
                                        "b": 0.15294118225574493
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:399:2865"
                                        }
                                      }
                                    }
                                  ],
                                  "strokes": [],
                                  "strokeWeight": 0.688957929611206,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "6905:14801",
                                  "name": "Frame 1171275932",
                                  "type": "FRAME",
                                  "x": 31,
                                  "y": 0,
                                  "width": 30,
                                  "height": 17,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      31
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
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 0.30000001192092896,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0,
                                        "g": 0,
                                        "b": 0
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:399:2853"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 0.20000000298023224,
                                  "cornerRadius": 4,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "layoutMode": "VERTICAL",
                                  "itemSpacing": 10,
                                  "children": [
                                    {
                                      "id": "6905:14802",
                                      "name": "2",
                                      "type": "TEXT",
                                      "x": 5,
                                      "y": 0,
                                      "width": 20,
                                      "height": 17,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          5
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
                                            "r": 0.07450980693101883,
                                            "g": 0.09803921729326248,
                                            "b": 0.15294118225574493
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:399:2865"
                                            }
                                          }
                                        }
                                      ],
                                      "strokes": [],
                                      "strokeWeight": 0.688957929611206,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "STRETCH",
                                      "layoutGrow": 0,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "6905:14803",
                              "name": "Frame 1171275934",
                              "type": "FRAME",
                              "x": 72,
                              "y": 0,
                              "width": 49,
                              "height": 17,
                              "relativeTransform": [
                                [
                                  1,
                                  0,
                                  72
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
                              "layoutAlign": "INHERIT",
                              "layoutGrow": 0,
                              "layoutMode": "HORIZONTAL",
                              "itemSpacing": 6,
                              "children": [
                                {
                                  "id": "6905:14804",
                                  "name": "To",
                                  "type": "TEXT",
                                  "x": 0,
                                  "y": 0,
                                  "width": 13,
                                  "height": 17,
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
                                        "r": 0.07450980693101883,
                                        "g": 0.09803921729326248,
                                        "b": 0.15294118225574493
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:399:2865"
                                        }
                                      }
                                    }
                                  ],
                                  "strokes": [],
                                  "strokeWeight": 0.688957929611206,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "children": []
                                },
                                {
                                  "id": "6905:14805",
                                  "name": "Frame 1171275932",
                                  "type": "FRAME",
                                  "x": 19,
                                  "y": 0,
                                  "width": 30,
                                  "height": 17,
                                  "relativeTransform": [
                                    [
                                      1,
                                      0,
                                      19
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
                                  "strokes": [
                                    {
                                      "type": "SOLID",
                                      "visible": true,
                                      "opacity": 0.30000001192092896,
                                      "blendMode": "NORMAL",
                                      "color": {
                                        "r": 0,
                                        "g": 0,
                                        "b": 0
                                      },
                                      "boundVariables": {
                                        "color": {
                                          "type": "VARIABLE_ALIAS",
                                          "id": "VariableID:399:2853"
                                        }
                                      }
                                    }
                                  ],
                                  "strokeWeight": 0.20000000298023224,
                                  "cornerRadius": 4,
                                  "effects": [],
                                  "blendMode": "PASS_THROUGH",
                                  "layoutAlign": "INHERIT",
                                  "layoutGrow": 0,
                                  "layoutMode": "VERTICAL",
                                  "itemSpacing": 10,
                                  "children": [
                                    {
                                      "id": "6905:14806",
                                      "name": "6",
                                      "type": "TEXT",
                                      "x": 5,
                                      "y": 0,
                                      "width": 20,
                                      "height": 17,
                                      "relativeTransform": [
                                        [
                                          1,
                                          0,
                                          5
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
                                            "r": 0.07450980693101883,
                                            "g": 0.09803921729326248,
                                            "b": 0.15294118225574493
                                          },
                                          "boundVariables": {
                                            "color": {
                                              "type": "VARIABLE_ALIAS",
                                              "id": "VariableID:399:2865"
                                            }
                                          }
                                        }
                                      ],
                                      "strokes": [],
                                      "strokeWeight": 0.688957929611206,
                                      "effects": [],
                                      "blendMode": "PASS_THROUGH",
                                      "layoutAlign": "STRETCH",
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

I'll help you create the compliance analysis component for the right side pane. Let's start by creating a new component for this. Based on the design, we need to create a component that shows:

1. A compliance score at the top
2. Conflict indicators
3. A section for detailed analysis
4. Page selection controls at the bottom

Let me create this component:

---

_**Assistant**_

```
import React from 'react';

interface ComplianceScoreProps {
  score: number;
  conflicts: Array<{
    title: string;
    description: string;
  }>;
  pages: {
    total: number;
    selected: number[];
  };
  onPageSelectionChange: (pages: number[]) => void;
}

export const ComplianceScore: React.FC<ComplianceScoreProps> = ({
  score,
  conflicts,
  pages,
  onPageSelectionChange,
}) => {
  const [selectedRange, setSelectedRange] = React.useState<'all' | 'range'>('all');
  const [pageRange, setPageRange] = React.useState({ from: 1, to: pages.total });

  return (
    <div className="w-[372px] min-h-screen border-l border-slate-200 bg-white shadow-lg">
      <div className="p-6 space-y-6">
        {/* Score Section */}
        <div>
          <h2 className="text-lg font-semibold text-primary">
            Your Compliance Score: {score}%
          </h2>
        </div>

        <hr className="border-slate-100" />

        {/* Conflicts Section */}
        <div className="space-y-2.5">
          {conflicts.length > 0 && (
            <div className="p-4 rounded bg-red-50 border border-red-200 text-red-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM8 5v3M8 10h.01"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{conflicts.length} CONFLICTS FOUND!</span>
              </div>
            </div>
          )}

          {conflicts.map((conflict, index) => (
            <div
              key={index}
              className="p-4 rounded bg-red-50 border border-red-200"
            >
              <h3 className="font-medium text-gray-900">{conflict.title}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {conflict.description}
              </p>
            </div>
          ))}
        </div>

        {/* Page Selection Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Select Pages to Analyze
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="pageSelection"
                checked={selectedRange === 'all'}
                onChange={() => setSelectedRange('all')}
                className="w-4 h-4 text-primary border-gray-300"
              />
              <span className="text-gray-900">Analyze All Pages</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="pageSelection"
                checked={selectedRange === 'range'}
                onChange={() => setSelectedRange('range')}
                className="w-4 h-4 text-primary border-gray-300"
              />
              <span className="text-gray-900">Specify Page Range</span>
            </label>

            {selectedRange === 'range' && (
              <div className="flex items-center gap-4 pl-7">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">From</span>
                  <input
                    type="number"
                    min={1}
                    max={pages.total}
                    value={pageRange.from}
                    onChange={(e) =>
                      setPageRange((prev) => ({
                        ...prev,
                        from: parseInt(e.target.value),
                      }))
                    }
                    className="w-16 px-2 py-1 text-sm border rounded bg-gray-50/50"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">To</span>
                  <input
                    type="number"
                    min={1}
                    max={pages.total}
                    value={pageRange.to}
                    onChange={(e) =>
                      setPageRange((prev) => ({
                        ...prev,
                        to: parseInt(e.target.value),
                      }))
                    }
                    className="w-16 px-2 py-1 text-sm border rounded bg-gray-50/50"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

_**Assistant**_



I've created the `ComplianceScore` component that matches the design. Here's what I've implemented:

1. A fixed-width (372px) sidebar with a white background and subtle shadow
2. Compliance score display at the top
3. Conflicts section that shows:
   - A warning banner with the number of conflicts
   - Individual conflict cards with title and description
4. Page selection controls with:
   - Radio buttons for "Analyze All Pages" or "Specify Page Range"
   - Page range inputs that appear when "Specify Page Range" is selected

The component accepts the following props:
- `score`: The compliance score percentage
- `conflicts`: An array of conflict objects with title and description
- `pages`: Object containing total pages and currently selected pages
- `onPageSelectionChange`: Callback for when page selection changes

Would you like me to:
1. Add more styling to match the exact colors from the design?
2. Implement the page selection logic to call `onPageSelectionChange`?
3. Add any additional features or make any adjustments?

---

_**User**_

Nice. Next let's implement the table of content component. The view to the side: here is the design: 
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

