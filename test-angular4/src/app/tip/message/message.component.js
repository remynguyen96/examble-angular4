"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var message_types_enum_1 = require("./shared/message-types.enum");
var MessageComponent = (function () {
    function MessageComponent() {
        this.type = message_types_enum_1.MessageTypes.Default;
        this.messageTypes = message_types_enum_1.MessageTypes;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    return MessageComponent;
}());
__decorate([
    core_1.Input()
], MessageComponent.prototype, "type", void 0);
MessageComponent = __decorate([
    core_1.Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styleUrls: ['./message.component.scss']
    })
], MessageComponent);
exports.MessageComponent = MessageComponent;
