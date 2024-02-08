module.exports = {
  extends: "airbnb-base",
  rules: {
    quotes: ["error", "double"],
    "no-console": "off", // Permitir el uso de console.log
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }], // Permitir el uso de next en middlewares sin usarlo
    "no-underscore-dangle": "off", // Permitir el uso de nombres de variables con guiones bajos
    "consistent-return": "off", // No requerir un valor de retorno en todas las funciones
    "arrow-parens": ["error", "as-needed"], // Permitir omitir paréntesis alrededor de un solo argumento en funciones de flecha
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }], // Permitir importaciones de devDependencies en archivos de prueba
  },
};
