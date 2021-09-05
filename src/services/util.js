let currency = 'usd';

/* Function to format currency */
export const formatCurrency = (num) => {
    let decLength = (num % 1 !== 0) ? 2 : 0;
    return num.toFixed(decLength).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/* Function to get currency symbols */
export const getCurrencySymbol = () => {
    return currency === 'usd' ? '$' : '';
}

/* Function to set currency */
export const setCurrency = (cur) => {
    currency = cur;
}

/* Function to get currency */
export const getCurrency = () => {
    return currency;
}

/* Function to set page metas */
export const setMeta = (data = {}) => {
    data.title = data.title || 'Default title';
    data.description = data.description || 'Default description';

    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.description);
}