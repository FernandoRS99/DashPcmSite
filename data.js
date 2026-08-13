window.VIEWER_DEMO_DATA = {
  "schemaVersion": 2,
  "privacyMode": "aggregated",
  "generatedAt": "2026-08-13T16:26:28.900Z",
  "technicians": [
    {
      "id": "T01",
      "name": "Carlos A."
    },
    {
      "id": "T02",
      "name": "Fernando R."
    },
    {
      "id": "T03",
      "name": "Irving G."
    },
    {
      "id": "T04",
      "name": "Patrick R."
    },
    {
      "id": "T05",
      "name": "Pedro M."
    }
  ],
  "months": {
    "2026-03": {
      "privacyMode": "aggregated",
      "monthlyTarget": 705,
      "monthlyTargets": [
        {
          "technicianId": "T05",
          "scaleType": "3x3",
          "targetHours": 141,
          "isActive": 1
        },
        {
          "technicianId": "T01",
          "scaleType": "manual",
          "targetHours": 141,
          "isActive": 1
        },
        {
          "technicianId": "T03",
          "scaleType": "3x3",
          "targetHours": 141,
          "isActive": 1
        },
        {
          "technicianId": "T02",
          "scaleType": "manual",
          "targetHours": 141,
          "isActive": 1
        },
        {
          "technicianId": "T04",
          "scaleType": "manual",
          "targetHours": 141,
          "isActive": 1
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-02",
          "orderType": "Corretiva",
          "executedHours": 0.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-03",
          "orderType": "Corretiva",
          "executedHours": 1.555555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-03",
          "orderType": "Corretiva",
          "executedHours": 1.555555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-03",
          "orderType": "Corretiva",
          "executedHours": 1.555555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-04",
          "orderType": "Corretiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-04",
          "orderType": "Corretiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-04",
          "orderType": "Corretiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-09",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-09",
          "orderType": "Corretiva",
          "executedHours": 0.916666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-10",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-10",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-10",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-11",
          "orderType": "Corretiva",
          "executedHours": 4.033333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-24",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-25",
          "orderType": "Preventiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-26",
          "orderType": "Corretiva",
          "executedHours": 1.75
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-03-27",
          "orderType": "Corretiva",
          "executedHours": 1
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": true,
          "formalDailyHours": 18.8,
          "periods": [
            {
              "id": "today",
              "label": "Último dia",
              "caption": "31/03",
              "executedHours": 0,
              "expectedHours": 0,
              "adherence": 0,
              "status": "Sem carga prevista",
              "tone": "neutral"
            },
            {
              "id": "week",
              "label": "Semana",
              "caption": "29/03 a 31/03 · período encerrado",
              "executedHours": 0,
              "expectedHours": 0,
              "adherence": 0,
              "status": "Sem carga prevista",
              "tone": "neutral"
            },
            {
              "id": "month",
              "label": "Mês fechado",
              "caption": "01/03 a 31/03",
              "executedHours": 28.616666666,
              "expectedHours": 282.00000000000006,
              "adherence": 10.147754136879431,
              "status": "Crítico",
              "tone": "critical"
            }
          ]
        },
        "technicians": {
          "T01": {
            "scopeLabel": "Carlos A.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T02": {
            "scopeLabel": "Fernando R.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T03": {
            "scopeLabel": "Irving G.",
            "available": true,
            "formalDailyHours": 9.4,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/03",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "29/03 a 31/03 · período encerrado",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/03 a 31/03",
                "executedHours": 0,
                "expectedHours": 141.00000000000003,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              }
            ]
          },
          "T04": {
            "scopeLabel": "Patrick R.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T05": {
            "scopeLabel": "Pedro M.",
            "available": true,
            "formalDailyHours": 9.4,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/03",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "29/03 a 31/03 · período encerrado",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/03 a 31/03",
                "executedHours": 0,
                "expectedHours": 141.00000000000003,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              }
            ]
          }
        }
      }
    },
    "2026-04": {
      "privacyMode": "aggregated",
      "monthlyTarget": 427.5,
      "monthlyTargets": [
        {
          "technicianId": "T01",
          "scaleType": "manual",
          "targetHours": 142.5,
          "isActive": 1
        },
        {
          "technicianId": "T02",
          "scaleType": "manual",
          "targetHours": 142.5,
          "isActive": 1
        },
        {
          "technicianId": "T04",
          "scaleType": "manual",
          "targetHours": 142.5,
          "isActive": 1
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-01",
          "orderType": "Preventiva",
          "executedHours": 9
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-01",
          "orderType": "Corretiva",
          "executedHours": 1.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-01",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-01",
          "orderType": "Corretiva",
          "executedHours": 1.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-01",
          "orderType": "Preventiva",
          "executedHours": 1.3625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-01",
          "orderType": "Preventiva",
          "executedHours": 1.3625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-01",
          "orderType": "Preventiva",
          "executedHours": 1.3625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-01",
          "orderType": "Preventiva",
          "executedHours": 1.3625
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-02",
          "orderType": "Corretiva",
          "executedHours": 10.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-02",
          "orderType": "Corretiva",
          "executedHours": 10.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-02",
          "orderType": "Preventiva",
          "executedHours": 1.208333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-02",
          "orderType": "Preventiva",
          "executedHours": 1.208333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-02",
          "orderType": "Preventiva",
          "executedHours": 1.208333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-02",
          "orderType": "Preventiva",
          "executedHours": 1.208333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-02",
          "orderType": "Corretiva",
          "executedHours": 10.5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-03",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-03",
          "orderType": "Preventiva",
          "executedHours": 6
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-03",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-03",
          "orderType": "Preventiva",
          "executedHours": 1.329166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-03",
          "orderType": "Preventiva",
          "executedHours": 1.329166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-03",
          "orderType": "Preventiva",
          "executedHours": 1.329166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-03",
          "orderType": "Preventiva",
          "executedHours": 1.329166666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-03",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-04",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-07",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-07",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-07",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-07",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-07",
          "orderType": "Preventiva",
          "executedHours": 1.116666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-07",
          "orderType": "Preventiva",
          "executedHours": 1.116666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-07",
          "orderType": "Preventiva",
          "executedHours": 1.116666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-07",
          "orderType": "Preventiva",
          "executedHours": 1.116666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-07",
          "orderType": "Preventiva",
          "executedHours": 1.116666666
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 3.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 3.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 3.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619048
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619048
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619048
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619048
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619047
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619047
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Preventiva",
          "executedHours": 1.047619047
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-08",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-09",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-09",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-09",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-09",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.98939394
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.98939394
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.98939394
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.98939394
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-09",
          "orderType": "Preventiva",
          "executedHours": 0.989393939
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-10",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-10",
          "orderType": "Preventiva",
          "executedHours": 1.05
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-10",
          "orderType": "Preventiva",
          "executedHours": 1.05
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-10",
          "orderType": "Preventiva",
          "executedHours": 1.05
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-13",
          "orderType": "Corretiva",
          "executedHours": 11
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-13",
          "orderType": "Corretiva",
          "executedHours": 11
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-13",
          "orderType": "Corretiva",
          "executedHours": 11
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-14",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-14",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 1.1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 1.1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 1.1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-14",
          "orderType": "Preventiva",
          "executedHours": 1.1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-14",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-15",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 2.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-15",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-16",
          "orderType": "Preventiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-16",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-16",
          "orderType": "Preventiva",
          "executedHours": 1.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Corretiva",
          "executedHours": 0.583333334
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-19",
          "orderType": "Corretiva",
          "executedHours": 0.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-19",
          "orderType": "Corretiva",
          "executedHours": 5.25
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-19",
          "orderType": "Corretiva",
          "executedHours": 5.25
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1.883333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1.883333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-19",
          "orderType": "Preventiva",
          "executedHours": 1.883333333
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-20",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-20",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 0.855555555
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 2.24
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 2.24
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 2.24
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 2.24
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-20",
          "orderType": "Preventiva",
          "executedHours": 2.24
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 2.75
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 2.75
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 2.75
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 2.75
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 0.977777778
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 0.977777778
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 0.977777777
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 2.161111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 2.161111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-21",
          "orderType": "Preventiva",
          "executedHours": 2.161111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-21",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-22",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-22",
          "orderType": "Preventiva",
          "executedHours": 0.944444445
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-22",
          "orderType": "Preventiva",
          "executedHours": 0.944444444
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-22",
          "orderType": "Preventiva",
          "executedHours": 0.944444444
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-22",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-22",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-22",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-22",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-25",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-25",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 0.833333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 0.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 0.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-25",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 1.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-25",
          "orderType": "Preventiva",
          "executedHours": 1.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-26",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-26",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 0.92
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 0.92
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 0.92
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 0.92
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 0.92
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Corretiva",
          "executedHours": 2.458333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-26",
          "orderType": "Corretiva",
          "executedHours": 2.458333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Preventiva",
          "executedHours": 1.475
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-26",
          "orderType": "Corretiva",
          "executedHours": 2.383333333
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-27",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-27",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 0.955555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 0.955555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 0.955555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-27",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-27",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 1.17
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 1.17
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 1.17
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 1.17
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Preventiva",
          "executedHours": 1.17
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-04-27",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-04-28",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-04-28",
          "orderType": "Corretiva",
          "executedHours": 2.783333333
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": false,
          "formalDailyHours": 0,
          "periods": []
        },
        "technicians": {
          "T01": {
            "scopeLabel": "Carlos A.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T02": {
            "scopeLabel": "Fernando R.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T04": {
            "scopeLabel": "Patrick R.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          }
        }
      }
    },
    "2026-05": {
      "privacyMode": "aggregated",
      "monthlyTarget": 298,
      "monthlyTargets": [
        {
          "technicianId": "T01",
          "scaleType": "manual",
          "targetHours": 0,
          "isActive": 0
        },
        {
          "technicianId": "T02",
          "scaleType": "manual",
          "targetHours": 152,
          "isActive": 1
        },
        {
          "technicianId": "T04",
          "scaleType": "5x2",
          "targetHours": 146,
          "isActive": 1
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-01",
          "orderType": "Corretiva",
          "executedHours": 2.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-02",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-02",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-03",
          "orderType": "Corretiva",
          "executedHours": 3.616666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-03",
          "orderType": "Corretiva",
          "executedHours": 3.616666667
        },
        {
          "aggregate": true,
          "technicianId": "T01",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-04",
          "orderType": "Corretiva",
          "executedHours": 0.958333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-05",
          "orderType": "Corretiva",
          "executedHours": 0.90625
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-06",
          "orderType": "Preventiva",
          "executedHours": 1.708333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-06",
          "orderType": "Preventiva",
          "executedHours": 1.708333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-06",
          "orderType": "Corretiva",
          "executedHours": 1.055555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-06",
          "orderType": "Corretiva",
          "executedHours": 1.055555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-06",
          "orderType": "Corretiva",
          "executedHours": 1.055555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-07",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-07",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-07",
          "orderType": "Preventiva",
          "executedHours": 1.208333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-07",
          "orderType": "Preventiva",
          "executedHours": 1.208333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-07",
          "orderType": "Corretiva",
          "executedHours": 1.25
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Preventiva",
          "executedHours": 0.845
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-08",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714286
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714286
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714286
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714286
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714286
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714285
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-09",
          "orderType": "Preventiva",
          "executedHours": 0.935714285
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-10",
          "orderType": "Corretiva",
          "executedHours": 1.008333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-10",
          "orderType": "Corretiva",
          "executedHours": 1.008333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-10",
          "orderType": "Corretiva",
          "executedHours": 1.008333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-10",
          "orderType": "Corretiva",
          "executedHours": 1.008333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-12",
          "orderType": "Preventiva",
          "executedHours": 2.908333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-12",
          "orderType": "Preventiva",
          "executedHours": 2.908333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-12",
          "orderType": "Preventiva",
          "executedHours": 2.908333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-12",
          "orderType": "Corretiva",
          "executedHours": 0.441666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-13",
          "orderType": "Corretiva",
          "executedHours": 5.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-13",
          "orderType": "Preventiva",
          "executedHours": 1.479166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-13",
          "orderType": "Preventiva",
          "executedHours": 1.479166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-13",
          "orderType": "Preventiva",
          "executedHours": 1.479166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-13",
          "orderType": "Preventiva",
          "executedHours": 1.479166666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 0.791666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 1.483333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 1.483333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 1.483333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 1.483333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-14",
          "orderType": "Preventiva",
          "executedHours": 1.483333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.76969697
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.769696969
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.769696969
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 0.769696969
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-15",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-16",
          "orderType": "Preventiva",
          "executedHours": 0.533333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-16",
          "orderType": "Corretiva",
          "executedHours": 0.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-18",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-19",
          "orderType": "Preventiva",
          "executedHours": 2.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-19",
          "orderType": "Corretiva",
          "executedHours": 2.125
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-19",
          "orderType": "Corretiva",
          "executedHours": 2.125
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-20",
          "orderType": "Corretiva",
          "executedHours": 11
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-20",
          "orderType": "Preventiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-20",
          "orderType": "Corretiva",
          "executedHours": 2.083333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-20",
          "orderType": "Corretiva",
          "executedHours": 2.083333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-21",
          "orderType": "Preventiva",
          "executedHours": 2.375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-21",
          "orderType": "Preventiva",
          "executedHours": 2.375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-21",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-22",
          "orderType": "Preventiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-22",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-25",
          "orderType": "Corretiva",
          "executedHours": 0.645833334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-25",
          "orderType": "Corretiva",
          "executedHours": 0.645833333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-25",
          "orderType": "Corretiva",
          "executedHours": 0.645833333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-05-25",
          "orderType": "Corretiva",
          "executedHours": 0.645833333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-26",
          "orderType": "Corretiva",
          "executedHours": 6
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-05-27",
          "orderType": "Corretiva",
          "executedHours": 6
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": true,
          "formalDailyHours": 7.3,
          "periods": [
            {
              "id": "today",
              "label": "Último dia",
              "caption": "31/05",
              "executedHours": 0,
              "expectedHours": 0,
              "adherence": 0,
              "status": "Sem carga prevista",
              "tone": "neutral"
            },
            {
              "id": "week",
              "label": "Semana",
              "caption": "31/05 a 31/05 · período encerrado",
              "executedHours": 0,
              "expectedHours": 0,
              "adherence": 0,
              "status": "Sem carga prevista",
              "tone": "neutral"
            },
            {
              "id": "month",
              "label": "Mês fechado",
              "caption": "01/05 a 31/05",
              "executedHours": 179.31666666900003,
              "expectedHours": 146,
              "adherence": 122.81963470479454,
              "status": "Excelente",
              "tone": "excellent"
            }
          ]
        },
        "technicians": {
          "T02": {
            "scopeLabel": "Fernando R.",
            "available": false,
            "formalDailyHours": 0,
            "periods": []
          },
          "T04": {
            "scopeLabel": "Patrick R.",
            "available": true,
            "formalDailyHours": 7.3,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/05",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "31/05 a 31/05 · período encerrado",
                "executedHours": 0,
                "expectedHours": 0,
                "adherence": 0,
                "status": "Sem carga prevista",
                "tone": "neutral"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/05 a 31/05",
                "executedHours": 82.333333336,
                "expectedHours": 146,
                "adherence": 56.392694065753425,
                "status": "Em evolução",
                "tone": "progress"
              }
            ]
          }
        }
      }
    },
    "2026-06": {
      "privacyMode": "aggregated",
      "monthlyTarget": 303,
      "monthlyTargets": [
        {
          "technicianId": "T01",
          "scaleType": "manual",
          "targetHours": 0,
          "isActive": 0
        },
        {
          "technicianId": "T02",
          "scaleType": "3x3",
          "targetHours": 142.5,
          "isActive": 1
        },
        {
          "technicianId": "T04",
          "scaleType": "5x2",
          "targetHours": 160.5,
          "isActive": 1
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-01",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-01",
          "orderType": "Corretiva",
          "executedHours": 9.25
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-02",
          "orderType": "Corretiva",
          "executedHours": 1.1875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-02",
          "orderType": "Corretiva",
          "executedHours": 1.1875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-02",
          "orderType": "Corretiva",
          "executedHours": 1.1875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-02",
          "orderType": "Corretiva",
          "executedHours": 1.1875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111112
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-03",
          "orderType": "Corretiva",
          "executedHours": 1.236111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Preventiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-08",
          "orderType": "Corretiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-09",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-10",
          "orderType": "Corretiva",
          "executedHours": 2.472222223
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-10",
          "orderType": "Corretiva",
          "executedHours": 2.472222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-10",
          "orderType": "Corretiva",
          "executedHours": 2.472222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-11",
          "orderType": "Preventiva",
          "executedHours": 2.555555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-11",
          "orderType": "Preventiva",
          "executedHours": 2.555555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-11",
          "orderType": "Preventiva",
          "executedHours": 2.555555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 0.683333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 0.683333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 0.683333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 0.683333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 0.683333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 2.722222223
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 2.722222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-12",
          "orderType": "Preventiva",
          "executedHours": 2.722222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Preventiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Preventiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-15",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-16",
          "orderType": "Preventiva",
          "executedHours": 1.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-16",
          "orderType": "Preventiva",
          "executedHours": 1.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-16",
          "orderType": "Preventiva",
          "executedHours": 1.916666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-16",
          "orderType": "Corretiva",
          "executedHours": 2.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-17",
          "orderType": "Preventiva",
          "executedHours": 2.583333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-17",
          "orderType": "Preventiva",
          "executedHours": 2.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-17",
          "orderType": "Corretiva",
          "executedHours": 1.125
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-17",
          "orderType": "Corretiva",
          "executedHours": 1.125
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-18",
          "orderType": "Preventiva",
          "executedHours": 2.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-18",
          "orderType": "Corretiva",
          "executedHours": 1.291666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-18",
          "orderType": "Corretiva",
          "executedHours": 1.291666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-18",
          "orderType": "Corretiva",
          "executedHours": 1.291666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-18",
          "orderType": "Corretiva",
          "executedHours": 1.291666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-23",
          "orderType": "Preventiva",
          "executedHours": 2.583333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-23",
          "orderType": "Preventiva",
          "executedHours": 2.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-23",
          "orderType": "Corretiva",
          "executedHours": 1.858333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-23",
          "orderType": "Corretiva",
          "executedHours": 1.858333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-24",
          "orderType": "Corretiva",
          "executedHours": 5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-24",
          "orderType": "Preventiva",
          "executedHours": 2.104166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-24",
          "orderType": "Preventiva",
          "executedHours": 2.104166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-24",
          "orderType": "Preventiva",
          "executedHours": 2.104166667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-24",
          "orderType": "Preventiva",
          "executedHours": 2.104166666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-25",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-26",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-26",
          "orderType": "Corretiva",
          "executedHours": 2.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-26",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-26",
          "orderType": "Corretiva",
          "executedHours": 2.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-26",
          "orderType": "Corretiva",
          "executedHours": 2.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-27",
          "orderType": "Corretiva",
          "executedHours": 1.525
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-27",
          "orderType": "Corretiva",
          "executedHours": 1.525
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-29",
          "orderType": "Corretiva",
          "executedHours": 1.194444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-29",
          "orderType": "Corretiva",
          "executedHours": 1.194444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-29",
          "orderType": "Corretiva",
          "executedHours": 1.194444444
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 3.083333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 3.083333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 2.0375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 2.0375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 2.0375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-06-30",
          "orderType": "Corretiva",
          "executedHours": 2.0375
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": true,
          "formalDailyHours": 16.795454545454547,
          "periods": [
            {
              "id": "today",
              "label": "Último dia",
              "caption": "30/06",
              "executedHours": 14.316666667,
              "expectedHours": 16.795454545454547,
              "adherence": 85.24131709715832,
              "status": "Próximo da meta",
              "tone": "attention"
            },
            {
              "id": "week",
              "label": "Semana",
              "caption": "28/06 a 30/06 · período encerrado",
              "executedHours": 17.9,
              "expectedHours": 24.090909090909093,
              "adherence": 74.30188679245282,
              "status": "Em evolução",
              "tone": "progress"
            },
            {
              "id": "month",
              "label": "Mês fechado",
              "caption": "01/06 a 30/06",
              "executedHours": 172.91666666999996,
              "expectedHours": 302.99999999999994,
              "adherence": 57.06820682178218,
              "status": "Em evolução",
              "tone": "progress"
            }
          ]
        },
        "technicians": {
          "T02": {
            "scopeLabel": "Fernando R.",
            "available": true,
            "formalDailyHours": 9.5,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "30/06",
                "executedHours": 6.166666667,
                "expectedHours": 9.5,
                "adherence": 64.91228070526316,
                "status": "Em evolução",
                "tone": "progress"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "28/06 a 30/06 · período encerrado",
                "executedHours": 6.166666667,
                "expectedHours": 9.5,
                "adherence": 64.91228070526316,
                "status": "Em evolução",
                "tone": "progress"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/06 a 30/06",
                "executedHours": 36.633333334,
                "expectedHours": 142.5,
                "adherence": 25.70760233964912,
                "status": "Crítico",
                "tone": "critical"
              }
            ]
          },
          "T04": {
            "scopeLabel": "Patrick R.",
            "available": true,
            "formalDailyHours": 7.295454545454546,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "30/06",
                "executedHours": 8.15,
                "expectedHours": 7.295454545454546,
                "adherence": 111.71339563862928,
                "status": "Excelente",
                "tone": "excellent"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "28/06 a 30/06 · período encerrado",
                "executedHours": 11.733333333,
                "expectedHours": 14.590909090909092,
                "adherence": 80.41536863738317,
                "status": "Próximo da meta",
                "tone": "attention"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/06 a 30/06",
                "executedHours": 136.283333336,
                "expectedHours": 160.49999999999994,
                "adherence": 84.91173416573211,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          }
        }
      }
    },
    "2026-07": {
      "privacyMode": "aggregated",
      "monthlyTarget": 590,
      "monthlyTargets": [
        {
          "technicianId": "T05",
          "scaleType": "6x1-night",
          "targetHours": 135,
          "isActive": 1
        },
        {
          "technicianId": "T01",
          "scaleType": "5x2",
          "targetHours": 0,
          "isActive": 0
        },
        {
          "technicianId": "T03",
          "scaleType": "6x1-night",
          "targetHours": 135,
          "isActive": 1
        },
        {
          "technicianId": "T02",
          "scaleType": "3x3",
          "targetHours": 152,
          "isActive": 1
        },
        {
          "technicianId": "T04",
          "scaleType": "5x2",
          "targetHours": 168,
          "isActive": 1
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 4
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-01",
          "orderType": "Preventiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 5.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 2.694444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 2.694444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 2.694444444
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-01",
          "orderType": "Corretiva",
          "executedHours": 5.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-02",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-02",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Preventiva",
          "executedHours": 0.361111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Preventiva",
          "executedHours": 0.361111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Preventiva",
          "executedHours": 0.361111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Corretiva",
          "executedHours": 1.708333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Corretiva",
          "executedHours": 1.708333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Corretiva",
          "executedHours": 1.708333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-02",
          "orderType": "Corretiva",
          "executedHours": 1.708333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-02",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 1.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 1.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 1.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 0.722222223
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 0.722222222
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 0.722222222
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 2.541666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-03",
          "orderType": "Preventiva",
          "executedHours": 2.541666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-03",
          "orderType": "Corretiva",
          "executedHours": 1.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-04",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-05",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.054166667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.054166667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.054166667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.054166666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.833333334
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.833333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Preventiva",
          "executedHours": 1.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 0.527777777
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-06",
          "orderType": "Corretiva",
          "executedHours": 6
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 3.222222223
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 3.222222222
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 3.222222222
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-07",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-07",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-07",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 2.020833334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 2.020833333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 2.020833333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-07",
          "orderType": "Corretiva",
          "executedHours": 2.020833333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-07",
          "orderType": "Preventiva",
          "executedHours": 2.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-07",
          "orderType": "Preventiva",
          "executedHours": 2.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-08",
          "orderType": "Preventiva",
          "executedHours": 1.055555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-08",
          "orderType": "Preventiva",
          "executedHours": 1.055555556
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-08",
          "orderType": "Preventiva",
          "executedHours": 1.055555555
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 3.041666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 3.041666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-08",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-08",
          "orderType": "Preventiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 1.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 3.25
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-08",
          "orderType": "Corretiva",
          "executedHours": 3.25
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-09",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 0.966666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 0.966666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-09",
          "orderType": "Preventiva",
          "executedHours": 2.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.944444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.944444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.944444444
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-09",
          "orderType": "Preventiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-09",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555556
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555556
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555556
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555555
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555555
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 0.805555555
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-10",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 1.416666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 1.416666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-10",
          "orderType": "Preventiva",
          "executedHours": 1.416666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-10",
          "orderType": "Corretiva",
          "executedHours": 1.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 0.733333334
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 0.733333334
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 0.733333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 0.733333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 0.733333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-11",
          "orderType": "Corretiva",
          "executedHours": 0.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 1.458333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-11",
          "orderType": "Preventiva",
          "executedHours": 1.458333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-11",
          "orderType": "Corretiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-12",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-12",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-12",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-12",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 2.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 2.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 2.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 2.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Preventiva",
          "executedHours": 2.541666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Preventiva",
          "executedHours": 2.541666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 0.6875
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-13",
          "orderType": "Preventiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-13",
          "orderType": "Preventiva",
          "executedHours": 1.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-13",
          "orderType": "Preventiva",
          "executedHours": 1.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-13",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 2.388888889
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 2.388888889
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 2.388888889
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 0.8
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 0.8
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 0.8
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 0.8
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 0.8
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 2.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 2.458333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 2.458333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 2.333333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-14",
          "orderType": "Preventiva",
          "executedHours": 2.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-14",
          "orderType": "Corretiva",
          "executedHours": 1.25
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111112
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 0.611111111
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-15",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-15",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-15",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 1.166666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-15",
          "orderType": "Preventiva",
          "executedHours": 1.166666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-15",
          "orderType": "Corretiva",
          "executedHours": 3
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-16",
          "orderType": "Preventiva",
          "executedHours": 0.583333334
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-16",
          "orderType": "Preventiva",
          "executedHours": 0.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-16",
          "orderType": "Corretiva",
          "executedHours": 1.75
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-16",
          "orderType": "Corretiva",
          "executedHours": 1.75
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-16",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 3.708333334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 3.708333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 0.75
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 0.75
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.85952381
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.85952381
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.85952381
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.85952381
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.859523809
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.859523809
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Preventiva",
          "executedHours": 0.859523809
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-17",
          "orderType": "Corretiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-18",
          "orderType": "Corretiva",
          "executedHours": 6.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-18",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 1.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 1.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-18",
          "orderType": "Preventiva",
          "executedHours": 1.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-19",
          "orderType": "Corretiva",
          "executedHours": 5.325
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-19",
          "orderType": "Corretiva",
          "executedHours": 5.325
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-19",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-19",
          "orderType": "Preventiva",
          "executedHours": 1.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 3.333333334
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 3.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 3.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555556
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555555
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555555
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1.305555555
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-20",
          "orderType": "Preventiva",
          "executedHours": 2.333333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-20",
          "orderType": "Preventiva",
          "executedHours": 2.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-20",
          "orderType": "Preventiva",
          "executedHours": 2.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-20",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-21",
          "orderType": "Preventiva",
          "executedHours": 1.416666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 1.888888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 1.888888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 1.888888889
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-21",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-21",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-21",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-21",
          "orderType": "Corretiva",
          "executedHours": 0.916666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-22",
          "orderType": "Corretiva",
          "executedHours": 7
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 1.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-22",
          "orderType": "Preventiva",
          "executedHours": 1.916666666
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-22",
          "orderType": "Corretiva",
          "executedHours": 0.916666667
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-22",
          "orderType": "Corretiva",
          "executedHours": 0.916666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-23",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-23",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-23",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-23",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-23",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-23",
          "orderType": "Corretiva",
          "executedHours": 2.638888889
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-23",
          "orderType": "Preventiva",
          "executedHours": 0.583333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-23",
          "orderType": "Preventiva",
          "executedHours": 0.583333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-23",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.972222223
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.972222222
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.972222222
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444445
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.444444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.4375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.4375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.4375
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1.4375
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.983333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.983333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.983333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.983333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Preventiva",
          "executedHours": 0.983333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-24",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 3.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-25",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-25",
          "orderType": "Preventiva",
          "executedHours": 1.083333334
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-25",
          "orderType": "Preventiva",
          "executedHours": 1.083333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-25",
          "orderType": "Preventiva",
          "executedHours": 1.083333333
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-25",
          "orderType": "Preventiva",
          "executedHours": 1.083333333
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-26",
          "orderType": "Preventiva",
          "executedHours": 1.066666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-26",
          "orderType": "Preventiva",
          "executedHours": 1.066666666
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-26",
          "orderType": "Corretiva",
          "executedHours": 2.616666667
        },
        {
          "aggregate": true,
          "technicianId": "T02",
          "date": "2026-07-26",
          "orderType": "Corretiva",
          "executedHours": 2.616666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-26",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T05",
          "date": "2026-07-26",
          "orderType": "Preventiva",
          "executedHours": 1.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Preventiva",
          "executedHours": 0.5
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-27",
          "orderType": "Corretiva",
          "executedHours": 1.319444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-28",
          "orderType": "Corretiva",
          "executedHours": 2.222222223
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-28",
          "orderType": "Corretiva",
          "executedHours": 2.222222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-28",
          "orderType": "Corretiva",
          "executedHours": 2.222222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-29",
          "orderType": "Corretiva",
          "executedHours": 2.722222223
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-29",
          "orderType": "Corretiva",
          "executedHours": 2.722222222
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-07-29",
          "orderType": "Corretiva",
          "executedHours": 2.722222222
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": true,
          "formalDailyHours": 26.804347826086957,
          "periods": [
            {
              "id": "today",
              "label": "Último dia",
              "caption": "31/07",
              "executedHours": 0,
              "expectedHours": 26.804347826086957,
              "adherence": 0,
              "status": "Crítico",
              "tone": "critical"
            },
            {
              "id": "week",
              "label": "Semana",
              "caption": "26/07 a 31/07 · período encerrado",
              "executedHours": 36.44999999999999,
              "expectedHours": 125.02173913043478,
              "adherence": 29.154929577464777,
              "status": "Crítico",
              "tone": "critical"
            },
            {
              "id": "month",
              "label": "Mês fechado",
              "caption": "01/07 a 31/07",
              "executedHours": 479.100000002,
              "expectedHours": 590,
              "adherence": 81.20338983084746,
              "status": "Próximo da meta",
              "tone": "attention"
            }
          ]
        },
        "technicians": {
          "T02": {
            "scopeLabel": "Fernando R.",
            "available": true,
            "formalDailyHours": 9.5,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/07",
                "executedHours": 0,
                "expectedHours": 9.5,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "26/07 a 31/07 · período encerrado",
                "executedHours": 7.366666666,
                "expectedHours": 28.5,
                "adherence": 25.84795321403509,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/07 a 31/07",
                "executedHours": 120.73333333400002,
                "expectedHours": 152,
                "adherence": 79.42982456184212,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          },
          "T03": {
            "scopeLabel": "Irving G.",
            "available": true,
            "formalDailyHours": 5,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/07",
                "executedHours": 0,
                "expectedHours": 5,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "26/07 a 31/07 · período encerrado",
                "executedHours": 5,
                "expectedHours": 30,
                "adherence": 16.666666666666664,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/07 a 31/07",
                "executedHours": 107.35000000099997,
                "expectedHours": 135,
                "adherence": 79.51851851925925,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          },
          "T04": {
            "scopeLabel": "Patrick R.",
            "available": true,
            "formalDailyHours": 7.304347826086956,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/07",
                "executedHours": 0,
                "expectedHours": 7.304347826086956,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "26/07 a 31/07 · período encerrado",
                "executedHours": 22.750000000999997,
                "expectedHours": 36.52173913043478,
                "adherence": 62.291666669404755,
                "status": "Em evolução",
                "tone": "progress"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/07 a 31/07",
                "executedHours": 131.50000000100002,
                "expectedHours": 168.00000000000003,
                "adherence": 78.27380952440475,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          },
          "T05": {
            "scopeLabel": "Pedro M.",
            "available": true,
            "formalDailyHours": 5,
            "periods": [
              {
                "id": "today",
                "label": "Último dia",
                "caption": "31/07",
                "executedHours": 0,
                "expectedHours": 5,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "26/07 a 31/07 · período encerrado",
                "executedHours": 1.333333333,
                "expectedHours": 30,
                "adherence": 4.4444444433333326,
                "status": "Crítico",
                "tone": "critical"
              },
              {
                "id": "month",
                "label": "Mês fechado",
                "caption": "01/07 a 31/07",
                "executedHours": 119.51666666599998,
                "expectedHours": 135,
                "adherence": 88.53086419703702,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          }
        }
      }
    },
    "2026-08": {
      "privacyMode": "aggregated",
      "monthlyTarget": 260,
      "monthlyTargets": [
        {
          "technicianId": "T05",
          "scaleType": "6x1-night",
          "targetHours": 130,
          "isActive": 1
        },
        {
          "technicianId": "T01",
          "scaleType": "3x3",
          "targetHours": 0,
          "isActive": 0
        },
        {
          "technicianId": "T03",
          "scaleType": "6x1-night",
          "targetHours": 130,
          "isActive": 1
        },
        {
          "technicianId": "T02",
          "scaleType": "3x3",
          "targetHours": 0,
          "isActive": 0
        },
        {
          "technicianId": "T04",
          "scaleType": "5x2",
          "targetHours": 0,
          "isActive": 0
        }
      ],
      "orders": [
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 6.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 1.15
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 1.15
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 1.15
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 1.15
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-03",
          "orderType": "Corretiva",
          "executedHours": 1.15
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-04",
          "orderType": "Preventiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-04",
          "orderType": "Preventiva",
          "executedHours": 0.666666666
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-04",
          "orderType": "Corretiva",
          "executedHours": 1.416666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-05",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-05",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-05",
          "orderType": "Corretiva",
          "executedHours": 1.333333333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-05",
          "orderType": "Preventiva",
          "executedHours": 2.520833334
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-05",
          "orderType": "Preventiva",
          "executedHours": 2.520833333
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-05",
          "orderType": "Corretiva",
          "executedHours": 1.041666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Preventiva",
          "executedHours": 1.2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Preventiva",
          "executedHours": 1.2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Preventiva",
          "executedHours": 1.2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Preventiva",
          "executedHours": 1.2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Preventiva",
          "executedHours": 1.2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-06",
          "orderType": "Corretiva",
          "executedHours": 0.666666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-07",
          "orderType": "Preventiva",
          "executedHours": 0.75
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-07",
          "orderType": "Preventiva",
          "executedHours": 0.75
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-07",
          "orderType": "Corretiva",
          "executedHours": 1.25
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-07",
          "orderType": "Corretiva",
          "executedHours": 1.25
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-08",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-09",
          "orderType": "Preventiva",
          "executedHours": 1
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-10",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 4.5
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777778
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-10",
          "orderType": "Corretiva",
          "executedHours": 1.277777777
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-11",
          "orderType": "Preventiva",
          "executedHours": 0.875
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-11",
          "orderType": "Preventiva",
          "executedHours": 0.875
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-11",
          "orderType": "Preventiva",
          "executedHours": 0.875
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-11",
          "orderType": "Preventiva",
          "executedHours": 0.875
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-11",
          "orderType": "Corretiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-11",
          "orderType": "Corretiva",
          "executedHours": 2.694444445
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-11",
          "orderType": "Corretiva",
          "executedHours": 2.694444444
        },
        {
          "aggregate": true,
          "technicianId": "T04",
          "date": "2026-08-11",
          "orderType": "Corretiva",
          "executedHours": 2.694444444
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-12",
          "orderType": "Preventiva",
          "executedHours": 2
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-12",
          "orderType": "Corretiva",
          "executedHours": 1.416666667
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-12",
          "orderType": "Corretiva",
          "executedHours": 1.416666666
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-13",
          "orderType": "Corretiva",
          "executedHours": 2.25
        },
        {
          "aggregate": true,
          "technicianId": "T03",
          "date": "2026-08-13",
          "orderType": "Corretiva",
          "executedHours": 2.25
        }
      ],
      "workRhythm": {
        "referenceDate": "2026-08-13",
        "general": {
          "scopeLabel": "Meta diária da equipe",
          "available": true,
          "formalDailyHours": 10,
          "periods": [
            {
              "id": "today",
              "label": "Hoje",
              "caption": "13/08 · parcial",
              "executedHours": 4.5,
              "expectedHours": 10,
              "adherence": 45,
              "status": "Em andamento",
              "tone": "neutral"
            },
            {
              "id": "week",
              "label": "Semana",
              "caption": "09/08 a 13/08 · semana em andamento",
              "executedHours": 22.333333333000002,
              "expectedHours": 50,
              "adherence": 44.666666666000005,
              "status": "Em andamento",
              "tone": "neutral"
            },
            {
              "id": "month",
              "label": "Mês até ontem",
              "caption": "01/08 a 12/08",
              "executedHours": 42.833333333,
              "expectedHours": 100,
              "adherence": 42.833333333,
              "status": "Crítico",
              "tone": "critical"
            }
          ]
        },
        "technicians": {
          "T03": {
            "scopeLabel": "Irving G.",
            "available": true,
            "formalDailyHours": 5,
            "periods": [
              {
                "id": "today",
                "label": "Hoje",
                "caption": "13/08 · parcial",
                "executedHours": 4.5,
                "expectedHours": 5,
                "adherence": 90,
                "status": "Em andamento",
                "tone": "neutral"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "09/08 a 13/08 · semana em andamento",
                "executedHours": 22.333333333000002,
                "expectedHours": 25,
                "adherence": 89.33333333200001,
                "status": "Em andamento",
                "tone": "neutral"
              },
              {
                "id": "month",
                "label": "Mês até ontem",
                "caption": "01/08 a 12/08",
                "executedHours": 42.833333333,
                "expectedHours": 50,
                "adherence": 85.666666666,
                "status": "Próximo da meta",
                "tone": "attention"
              }
            ]
          },
          "T05": {
            "scopeLabel": "Pedro M.",
            "available": true,
            "formalDailyHours": 5,
            "periods": [
              {
                "id": "today",
                "label": "Hoje",
                "caption": "13/08 · parcial",
                "executedHours": 0,
                "expectedHours": 5,
                "adherence": 0,
                "status": "Em andamento",
                "tone": "neutral"
              },
              {
                "id": "week",
                "label": "Semana",
                "caption": "09/08 a 13/08 · semana em andamento",
                "executedHours": 0,
                "expectedHours": 25,
                "adherence": 0,
                "status": "Em andamento",
                "tone": "neutral"
              },
              {
                "id": "month",
                "label": "Mês até ontem",
                "caption": "01/08 a 12/08",
                "executedHours": 0,
                "expectedHours": 50,
                "adherence": 0,
                "status": "Crítico",
                "tone": "critical"
              }
            ]
          }
        }
      }
    }
  }
}
