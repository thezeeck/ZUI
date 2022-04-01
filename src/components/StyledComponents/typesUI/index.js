export const typesUI = (constName, id) => {
  switch (constName) {
    case "colors": return `const ${id} =
    'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
`;
    case "collapseVariants": return `const ${id} =
    'bordered'
  | 'default'
  | 'filled'
  | 'splitted';
`;
    case "weights": return `const ${id} =
    'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xs';
`;
    case "backgrounds": return `const  ${id} =
    'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error',
  | 'gradients_text'
  | 'gradients_primary'
  | 'gradients_secondary'
  | 'gradients_success'
  | 'gradients_warning'
  | 'gradients_error'
`;
    case "variants": return `const ${id} =
    'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
`;
    case "buttonVariants": return `const ${id} =
    'filled'
  | 'outlined'
  | 'text'
  | 'flat'
  | 'shadow'
`;
    default: return false;
  }
}