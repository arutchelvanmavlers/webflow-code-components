import * as React from "react";
import { useState } from "react";
import jsPDF from "jspdf";

interface CalculatorProps {
  sectionBg: string;
  heading: string;
  buttonText: string;
}

export const Calculator = ({
  sectionBg,
  heading,
  buttonText,
}: CalculatorProps) => {
  const [inputs, setInputs] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
  });

  const values = Object.values(inputs);

  const outputs = {
    sum: values.reduce((a, b) => a + b, 0),
    average: values.reduce((a, b) => a + b, 0) / 5,
    max: Math.max(...values),
    min: Math.min(...values),
    multiply: values.reduce((a, b) => a * b, 1),
  };

  const handleChange = (key: string, value: string) => {
    setInputs({
      ...inputs,
      [key]: Number(value),
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Calculator Report", 20, 20);

    doc.setFontSize(14);
    doc.text("Inputs", 20, 40);

    doc.text(`Input 1: ${inputs.input1}`, 20, 50);
    doc.text(`Input 2: ${inputs.input2}`, 20, 60);
    doc.text(`Input 3: ${inputs.input3}`, 20, 70);
    doc.text(`Input 4: ${inputs.input4}`, 20, 80);
    doc.text(`Input 5: ${inputs.input5}`, 20, 90);

    doc.text("Outputs", 20, 120);

    doc.text(`Sum: ${outputs.sum}`, 20, 130);
    doc.text(`Average: ${outputs.average}`, 20, 140);
    doc.text(`Max: ${outputs.max}`, 20, 150);
    doc.text(`Min: ${outputs.min}`, 20, 160);
    doc.text(`Multiply: ${outputs.multiply}`, 20, 170);

    doc.save("calculator-report.pdf");
  };

  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-[1000px] mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold mb-10">{heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(inputs).map((key, index) => (
            <input
              key={key}
              type="number"
              placeholder={`Input ${index + 1}`}
              className="h-[60px] px-5 border border-2 border-solid border-black rounded-xl"
              onChange={(e) => handleChange(key, e.target.value)}
            />
          ))}
        </div>

        <div className="mt-10 bg-gray-100 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">Outputs</h3>
          <div className="space-y-3 text-lg">
            <p>Sum: {outputs.sum}</p>
            <p>Average: {outputs.average}</p>
            <p>Max: {outputs.max}</p>
            <p>Min: {outputs.min}</p>
            <p>Multiply: {outputs.multiply}</p>
          </div>
        </div>

        <button
          onClick={generatePDF}
          className="mt-8 px-8 py-4 bg-black text-white rounded-xl cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};