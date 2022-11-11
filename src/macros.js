const Macros = {
  unit: ['\\mathop{}\\!\\mathrm{#1}', 1],
  diff: ['\\mathop{}\\!\\mathrm{d}'],
  abs: ['\\left\\lvert{#1}\\right\\rvert', 1],
  pbrace: ['\\left(#1\\right)', 1],
  bbrace: ['\\left[#1\\right]', 1],
  cbrace: ['\\left\\{#1\\right\\}', 1],
  degreeC: ['{}^{\\circ}\\mathrm{C}'],
}

module.exports = {
  Macros,
}
