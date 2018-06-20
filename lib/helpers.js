export function translateTypeName (name) {
    switch(name) {
        case 'Integer32':
            return 'i32';
        case 'Integer64':
            return 'i64';
        case 'Float32':
            return 'f32';
        case 'Float64':
            return 'f64';
        default:
            return `Untranslated: ${name}`
    }
}