<template>
    <div class="”container”">
        <div class="row px-3">
            <div class="col-4">
                <h2>Master Detail Component</h2>
                <ul class="list-group">
                    <li v-for="(entity, i) in list" :key="i" class="list-group-item">
                        <span class="text-danger pr-2">{{ entity.id }}</span>
                        <span class="pr-3">{{ entity.name }}</span>
                        <button @click="editEntity(entity.id)">Edit</button>
                    </li>
                </ul>
                <p>New Id Incoming: {{ newId }}</p>
                <button @click="addNew()" class="mb-1">Add New</button>
                <entity-child :entity="temp" @entitySaved="entitySaved($event)"></entity-child>
            </div>
            <div class="col-4">
                <h2>Master-Detail with Vuex</h2>
                <UserComponent></UserComponent>
            </div>
        </div>
    </div>
</template>
<script>
import recruiterLayout from "../../recruiter/recruiter-layout";
import EntityChild from "../../menu/EntityChild";
import UserComponent from "./User";

export default {
    data() {
        return {
            temp: {},
            list: [
                {
                    id: 1,
                    name: "John"
                },
                {
                    id: 2,
                    name: "Wick"
                }
            ]
        };
    },
    mounted: function() {},
    computed: {
        newId: function() {
            let entities = this.list.filter(
                x => x.id == Math.max(...this.list.map(y => Number(y.id)))
            );
            if (entities.length > 0) {
                let entity = entities[0];
                return entity.id + 1;
            }
            return 1;
        }
    },
    components: {
        EntityChild,
        UserComponent
    },
    methods: {
        addNew: function() {
            this.temp = {};
        },
        editEntity: function(selectedEntityId) {
            let entity = this.list.find(x => x.id == selectedEntityId);
            if (entity) {
                this.temp = {
                    // ---Shallow copy of element into child property
                    id: entity.id,
                    name: entity.name
                };
            } else {
                console.log("Entity not found");
            }
        },
        entitySaved($event) {
            if ($event.id == undefined) {
                this.list.push({
                    id: this.newId,
                    name: $event.name
                });
            } else {
                var m = this.list.find(x => x.id == $event.id);
                m.name = $event.name;
            }
            this.temp = {};
        }
    }
};
</script>