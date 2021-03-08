import { isCPF, isCNPJ, isDate, isCEP } from "brazilian-values";
import { validateEmail } from "./validators";

export * from "brazilian-values";
export * from "./validators";

export default function validateField(value, validation, getField = false) {
  const errors = [];

  validation &&
    Object.keys(validation).forEach((key) => {
      switch (key) {
        case "required":
          if (validation.required) {
            if (value) {
              // aqui ta pegando o valor 0 como required
              value === "" && errors.push("required");
            } else {
              errors.push("required");
            }
          }
          break;

        case "max":
          value && value.length > validation.max && errors.push("max");
          break;

        case "min":
          value && value.length < validation.min && errors.push("min");
          break;

        case "email":
          value && !validateEmail(value) && errors.push("email");
          break;

        case "cep":
          value && !isCEP(value) && errors.push("cep");
          break;

        case "cpf":
          value && !isCPF(value) && errors.push("cpf");
          break;

        case "cnpj":
          value && !isCNPJ(value) && errors.push("cnpj");
          break;

        case "date":
          value && isNaN(Date.parse(value)) && errors.push("date");
          break;

        case "dateBR":
          value && !isDate(value) && errors.push("dateBR");
          break;

        case "equalsToField":
          if (getField) {
            const targetField = getField(validation.equalsToField.name);
            const targetValue = targetField?.ref?.getValue();

            if (targetValue && value) {
              if (targetValue !== value) {
                errors.push("equalsToField");
                targetField.ref.addError("equalsToField");
                targetField.ref.setTouched();
              } else {
                targetField.ref.removeError("equalsToField");
              }
            }
          }
          break;

        default:
          break;
      }
    });

  return errors;
}

export function errorMessage(error, validation = {}) {
  return {
    required: "Este campo é obrigatório",
    email: "Insira um email válido",
    cep: "Insira um CEP válido",
    cpf: "Insira um CPF válido",
    cnpj: "Insira um CNPJ válido",
    date: "Insira uma data válida",
    dateBR: "Insira uma data válida",
    equalsToField: `Deve ser igual ao campo "${
      validation.equalsToField && validation.equalsToField.label
    }"`,
    max: `Esta campo suporta no máximo ${validation.max} caracteres`,
    min: `Esta campo suporta no minimo ${validation.min} caracteres`,
  }[error];
}
