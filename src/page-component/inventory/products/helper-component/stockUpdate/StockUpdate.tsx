import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface StockUpdateProps {
  initialValue: number;
  onUpdate: (newQuantity: number) => void;
}

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85px;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 1px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 6px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 1px;
  border-radius: 6px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: 1px solid transparent;
`;

const StockUpdate: React.FC<StockUpdateProps> = ({ initialValue, onUpdate }) => {
  const [quantity, setQuantity] = useState(initialValue);

  // Update the quantity state whenever initialValue changes
  useEffect(() => {
    setQuantity(initialValue);
  }, [initialValue]);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleUpdate = () => {
    onUpdate(quantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity(value >= 0 ? value : 0);
    } else {
      setQuantity(0);
    }
  };

  return (
    <Container>
      <SelectBox
        onChange={(e) => {
          if (e.target.value === "add") handleAdd();
          else if (e.target.value === "subtract") handleSubtract();
        }}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
      </SelectBox>

      <InputBox
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />

      <Button onClick={handleUpdate}>Update</Button>
    </Container>
  );
};

export default StockUpdate;
