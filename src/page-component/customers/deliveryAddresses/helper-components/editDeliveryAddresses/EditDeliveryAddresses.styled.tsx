import breakpoints from '@/themes/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  ${breakpoints.xs} {
    gap: 1rem;
    margin-top: 1rem;
  }

  ${breakpoints.md} {
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
    ${breakpoints.xs} {
    flex-direction: column;
    gap: 1rem;
  }
      ${breakpoints.md} {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
    ${breakpoints.xs} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
      ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem; 
    ${breakpoints.xs} {
    margin-right: 0;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
      ${breakpoints.md} {
    margin-right: 0.8rem;
    font-size: 1rem;
  }
`;

export const Value = styled.span`
  font-size: 1rem;
  color: #333;
  flex: 1; 
  ${breakpoints.xs} {
    font-size: 0.875rem;
    
  }
      ${breakpoints.md} {
    font-size: 1rem;
  }
`;

export const SelectInput = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
    ${breakpoints.md} {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;

export const TextInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
    ${breakpoints.md} {
    padding: 0.6rem;
    font-size: 1rem;
  }
`;

export const CustomDropdownPart = styled.div`
  position: relative;

  .custom-icon-right {
    right: 10px;

    ${breakpoints.xs} {
      right: 10px;
    }
    ${breakpoints.md} {
      right: 10px;
    }
    ${breakpoints.lg} {
      right: 10px;
    }
    ${breakpoints["xl"]} {
      right: 20px;
    }
    ${breakpoints["2xl"]} {
      right: 10px;
    }
  }
      .custom-width {
    width: 350px;
    ${breakpoints.xs} {
    width: 350px;
    }
    ${breakpoints.md} {
    width: 200px;
    }
    ${breakpoints.lg} {
    width: 250px;
    }
    ${breakpoints["xl"]} {
    width: 350px;
    }
    ${breakpoints["2xl"]} {
      width: 350px;
    }
  }
 `;