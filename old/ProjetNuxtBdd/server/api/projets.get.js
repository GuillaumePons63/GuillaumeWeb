import Activity from '../../models/activity.js';


export default defineEventHandler((event) => {
    return Activity.findAll()
})



