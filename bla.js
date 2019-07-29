const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

capitalize('codesnacks'); //'Codesnacks'
capitalize('c'); //'C'
capitalize(0); //'C'
capitalize(true); //'C'
