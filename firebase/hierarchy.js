const topLevel = db.collection('comments').where('parent', '==', false);


const level = db.collection('comments').where('parent', '==', id)


const traverseAll = (id) => {
    const tree = db.collection('comments')
    .where('parent', '>=', id)
    .where('parent', '<=', `${id}~`)
}
