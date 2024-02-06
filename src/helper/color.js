export const getColorClass = (priority) => {
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


export const statusColor=(status)=>{
    switch (status) {
        case 'Completed':
            return 'text-bg-success';
        case 'Incompleted':
            return 'text-bg-danger';
        
        default:
            return '';
    }
}