import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            footer: [
                {
                    name: 'Home', icon: 'home',
                    page: 'mobile/home'
                },
                {
                    name: 'Tasks', icon: 'tasks',
                    page: 'mobile/tasks'
                },
                {
                    name: 'History', icon: 'history',
                    page: 'mobile/history'
                },
                {
                    name: 'Settings', icon: 'cog',
                    page: 'mobile/settings'
                }
            ],
            options: [
                {
                    name: 'About',
                    page: 'about'
                },
                {
                    name: 'Glossary',
                    page: 'glossary'
                }
            ],
            sidebar: [
                {
                    name: 'Github',
                },
                {
                    name: 'Android'
                },
                {
                    name: 'iOS'
                }
            ]
        }
    }

    constructor(element) {
        super(element);
        this.model = this.setModel(this.getModel());

        this.on("needMenuItems", e => {
            e.stopImmediatePropagation();
            const callback = e.detail;
            callback(null, this.model.sidebar);
        });
    }
}

export default MobileController;