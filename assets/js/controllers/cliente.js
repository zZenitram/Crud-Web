function crud() {
    function reader() {
        console.log('Read');
    }

    function creater() {
        console.log('Create');
    }

    function deleter() {
        console.log('Delete');
    }

    function updater() {
        console.log('Update');
    }

    return { reader, creater, deleter, updater }
}

const factory = crud()

factory.reader();

factory.creater()

factory.updater()

factory.deleter()