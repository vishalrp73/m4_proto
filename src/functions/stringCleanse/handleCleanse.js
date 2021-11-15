export const handleCleanse = (str) => {

    let splitter = ((str).replace(/[.,#!@$%?^&*;:"{}=\-_`~()]/g, ' ').split(' '));
    splitter.forEach((item, index) => {
        if (item === '') {
            splitter.splice(index, 1);
        }
    });
    const convert = splitter.join(' ');
    return convert;
    
}