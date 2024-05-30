import { useState } from 'react';
import './App.css'
import MultiLevelSelect from 'react-select-multi-level';

const data = [
  {
    "id": 1,
    "name": "Gender",
    "pId": null,
    "children": [
      {
        "id": 4,
        "name": "Masculine",
        "pId": 1,
        "particleType": "Masculine",
        "children": []
      },
      {
        "id": 5,
        "name": "Femenine",
        "pId": 1,
        "particleType": "Femenine",
        "children": []
      },
      {
        "id": 6,
        "name": "Neutral",
        "pId": 1,
        "particleType": "Neutral",
        "children": []
      }
    ]
  },
  {
    "id": 2,
    "name": "Articles",
    "pId": null,
    "children": [
      {
        "id": 7,
        "name": "Defined Articles",
        "pId": 2,
        "children": [
          {
            "id": 9,
            "name": "Nominative",
            "pId": 7,
            "children": [
              {
                "id": 10,
                "name": "Masculine",
                "pId": 9,
                "particleType": "Masculine",
                "children": []
              },
              {
                "id": 11,
                "name": "Femenine",
                "pId": 9,
                "particleType": "Femenine",
                "children": []
              },
              {
                "id": 12,
                "name": "Neutral",
                "pId": 9,
                "particleType": "Neutral",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 8,
        "name": "Undefined Articles",
        "pId": 2,
        "children": [
          {
            "id": 13,
            "name": "Accusative",
            "pId": 8,
            "children": [
              {
                "id": 14,
                "name": "Masculine",
                "pId": 13,
                "children": []
              },
              {
                "id": 15,
                "name": "Femenine",
                "pId": 13,
                "particleType": "Femenine",
                "children": []
              },
              {
                "id": 16,
                "name": "Neutral",
                "pId": 13,
                "particleType": "Neutral",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Pronuons",
    "pId": null,
    "children": []
  }
]

// transforming the data as per the need of MultiLevelSelect component.
const transformData = (data) => {
  const transformedOptions = data.map(item => {
    const transformedItem = {
      value: item.id,
      label: item.name,
      options: item.children.length ? transformData(item.children) : undefined
    };
    return transformedItem;
  });
  return transformedOptions;
};

const options = transformData(data);

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    console.log("selected value:",selected);
  };

  return (
    <div>
      <MultiLevelSelect
        placeholder="Select Item"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}
