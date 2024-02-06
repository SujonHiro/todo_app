const getColorClass = (priority) => {
    switch (priority) {
        case 'High':
            return 'text-bg-danger';
        case 'Medium':
            return 'text-bg-warning';
        case 'Low':
            return 'text-bg-primary';
        default:
            return '';
    }
}
export default getColorClass