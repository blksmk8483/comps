import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept.
        </p>
        </Modal>

    return (
        <div className='relative'>
            <Button onClick={handleClick} primary>
                Open Modal
                </Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et efficitur urna. Cras at odio faucibus, congue lectus quis, porta lectus. Aliquam faucibus tortor nisl. Aenean hendrerit risus dui, id commodo magna blandit sed. Donec non ante quis sapien vulputate hendrerit vitae vitae nulla. Duis convallis tortor vitae nisi condimentum, nec rutrum elit tristique. Morbi elit nisl, auctor non libero quis, iaculis maximus sapien. Sed a erat et magna rhoncus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac ultrices mi, semper accumsan diam. Aliquam varius sed eros congue imperdiet. Vivamus in tristique enim. Aenean quis tincidunt lacus, lacinia vestibulum quam. In elit ipsum, congue at odio at, feugiat tempor ligula. Aliquam a odio vitae enim tempor pulvinar.
            </p>
            
        </div>
    );
};

export default ModalPage;