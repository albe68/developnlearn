const useTimeAgo=()=>{
    const TimeAgo=(date)=>{
            const current=new Date();
            const sendDate=new Date(date);
            const timeDifference=current.getTime() - sendDate.getTime();

            const minutes=Math.floor(timeDifference/1000/60);
            console.log(minutes,"consoled")
            if(minutes>0){
                return `${minutes} minute${minutes===1 ? '' : 's'} ago`; //if 1 minute => 1 min ago || 2 mins ago
            }

    }
    return TimeAgo;
}

export default useTimeAgo;