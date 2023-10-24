import Activity from '@/models/activity.js';


export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'name');

    return Activity.findOne({ where: { title: name } });

});

