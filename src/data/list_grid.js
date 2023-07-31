export default [
    {
      "id": "1cd5a302-65d3-408f-a294-80aac7e595bd",
      "is_shared": true,
      "is_system": true,
      "module_id": "1",
      "name": "Recently modified Contacts",
      "owner": "1",
      "query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "condition": "CURRENT_WEEK",
              "data": "",
              "field": {
                "fieldName": "lastModifiedAt"
              },
              "moduleName": "Contact"
            }
          ]
        }
      },
      "filter_query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "conditions": [
                {
                  "operator": "",
                  "type": "CURRENT_WEEK"
                }
              ],
              "fieldName": "lastModifiedAt",
              "moduleName": "Contact"
            }
          ]
        }
      },
      "internal_name": "Recently modified Contacts",
      "fields": [],
      "is_selected": false,
      "is_favourite": false
    },
    {
      "id": "3a773905-9cf1-4da0-8234-f6ceeaa56c4c",
      "is_shared": true,
      "is_system": true,
      "module_id": "1",
      "name": "All Contacts",
      "owner": "1",
      "query": {
        "group": {}
      },
      "filter_query": {
        "group": {}
      },
      "internal_name": "All Contacts",
      "fields": [],
      "is_selected": false,
      "is_favourite": false
    },
    {
      "id": "6286e961-d538-48d7-8fa9-fe0c52dc6452",
      "is_shared": true,
      "is_system": true,
      "module_id": "1",
      "name": "My Contacts",
      "owner": "1",
      "query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "condition": "NOT_EMPTY",
              "data": "",
              "field": {
                "fieldName": "name"
              },
              "moduleName": "Contact"
            },
            {
              "condition": "EQUALS",
              "data": "$MYSELF$",
              "field": {
                "fieldName": "owner"
              },
              "moduleName": "Contact"
            }
          ]
        }
      },
      "filter_query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "conditions": [
                {
                  "operator": "",
                  "type": "NOT_EMPTY"
                }
              ],
              "fieldName": "name",
              "moduleName": "Contact"
            },
            {
              "conditions": [
                {
                  "data": "$MYSELF$",
                  "operator": "",
                  "type": "EQUALS"
                }
              ],
              "fieldName": "owner",
              "moduleName": "Contact"
            }
          ]
        }
      },
      "internal_name": "My Contacts",
      "fields": [],
      "is_selected": true,
      "is_favourite": false
    },
    {
      "id": "ad9bdf84-8ffe-478f-ab1e-e9dd403bee3c",
      "is_shared": true,
      "is_system": true,
      "module_id": "1",
      "name": "New last week",
      "owner": "1",
      "query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "condition": "LAST_WEEK",
              "data": "",
              "field": {
                "fieldName": "createdAt"
              },
              "moduleName": "Contact"
            }
          ]
        }
      },
      "filter_query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "conditions": [
                {
                  "operator": "",
                  "type": "LAST_WEEK"
                }
              ],
              "fieldName": "createdAt",
              "moduleName": "Contact"
            }
          ]
        }
      },
      "internal_name": "New last week",
      "fields": [],
      "is_selected": false,
      "is_favourite": false
    },
    {
      "id": "e5de98e0-58f2-4c79-ad2c-71d6b3e87809",
      "is_shared": true,
      "is_system": true,
      "module_id": "1",
      "name": "New this week",
      "owner": "1",
      "query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "condition": "CURRENT_WEEK",
              "data": "",
              "field": {
                "fieldName": "createdAt"
              },
              "moduleName": "Contact"
            }
          ]
        }
      },
      "filter_query": {
        "group": {
          "operator": "AND",
          "rules": [
            {
              "conditions": [
                {
                  "operator": "",
                  "type": "CURRENT_WEEK"
                }
              ],
              "fieldName": "createdAt",
              "moduleName": "Contact"
            }
          ]
        }
      },
      "internal_name": "New this week",
      "fields": [],
      "is_selected": false,
      "is_favourite": false
    }
  ]
