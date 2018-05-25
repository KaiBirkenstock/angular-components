import VanillaModal from 'vanilla-modal';
import { EventEmitter, Component, Output, Input } from '@angular/core';
var Modal = /** @class */ (function () {
    function Modal() {
        this._size = 'medium';
        this.height = null;
        this._headline = '';
        this.close = new EventEmitter();
        this.open = new EventEmitter();
    }
    Object.defineProperty(Modal.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (bool) {
            if (this.modal) {
                this._visible = bool;
                if (bool) {
                    this.modal.open("#" + this.target);
                    document.body.style.overflow = 'hidden';
                }
                else if (this.target) {
                    this.onClose();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.onClose = function () {
        document.body.style.overflow = 'auto';
        this.close.emit('42');
        this.modal.close();
    };
    Object.defineProperty(Modal.prototype, "headline", {
        get: function () {
            return this._headline;
        },
        set: function (headline) {
            this._headline = headline;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.ngOnInit = function () {
        var _this = this;
        this.target = "" + this.target;
        this.modal = new VanillaModal({
            page: '#app-container',
            clickOutside: false,
            onClose: function () {
                _this.onClose();
            },
            onOpen: function () {
                _this.open.emit('42');
            }
        });
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: 'modal',
                    template: "\n    <div style=\"display: none;\" id=\"{{target}}\">\n      <div class=\"modal-wrapper {{size}} height-{{height}}\">\n        <div class=\"modal-header\" *ngIf=\"headline\">\n          <h3>{{headline}}</h3>\n        </div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .andavis-modal{display:block;margin:0;width:100%;position:fixed;content:\"\";top:2vh;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:-1 !important;opacity:0;transition:opacity 0.2s, z-index 0s 0.2s;text-align:center;overflow:hidden;overflow-y:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}.andavis-modal>*{display:inline-block;white-space:normal;vertical-align:middle;text-align:left}.andavis-modal:before{display:inline-block;overflow:hidden;width:0;height:100%;vertical-align:middle;content:\"\"}.andavis-modal .block-header{padding:14px 18px}.andavis-modal .block-header .block-title{color:rgba(255,255,255,0.9)}.andavis-modal .modal-footer{margin:0 -18px}.modal-visible .andavis-modal{z-index:99 !important;opacity:1;display:block;transition:opacity 0.2s}.modal-visible .modal-content{border-radius:0;display:block}.modal-visible .modal-content .row{margin:0}.modal-inner{position:relative;overflow:hidden;width:90%;max-height:90%;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:-1;opacity:0;transform:scale(0);transition:opacity 0.2s, transform 0.2s, z-index 0s 0.2s;margin:20px 0}.modal-inner .modal-content{min-height:100px}.modal-visible .modal-inner{z-index:100;opacity:1;transform:scale(1);transition:opacity 0.2s, transform 0.2s}.andavis-modal:before{vertical-align:top}.andavis-modal .modal-inner{margin:0;width:auto;min-width:450px;max-height:80%;top:10vh}.andavis-modal .modal-inner a.close-modal{position:absolute;right:5px;top:5px;padding:10px;z-index:10;cursor:pointer}.andavis-modal .modal-buttons{display:flex;justify-content:flex-end}.andavis-modal .modal-buttons button{margin-left:10px}.basic-modal .modal-body{padding:15px}.basic-modal .modal-body .radio-label{display:block;margin-bottom:10px}.basic-modal .modal-footer{padding:15px}.modal-body.save-as-favorite{display:flex;flex-flow:row nowrap;align-items:center !important;justify-content:center !important;background-color:rgba(0,0,0,0.7)}.modal-body.save-as-favorite .wrapper{width:350px}.modal-body.save-as-favorite .wrapper h4{color:white;text-align:center;margin:20px 0}.modal-body.save-as-favorite .wrapper input[type=text]{display:block;width:100%;margin-bottom:20px;padding:10px 5px;box-sizing:border-box}.modal-body.save-as-favorite .wrapper .btn-transparent{color:white}.modal-body.save-as-favorite .wrapper .btn-transparent:hover{color:blue}.andavis-modal .modal-wrapper{max-height:80%;display:flex;flex-flow:column nowrap}.andavis-modal .modal-wrapper .block-content{position:relative;flex-grow:1;display:flex;min-height:7vh;flex-flow:column nowrap;overflow:hidden}.andavis-modal .modal-wrapper.medium{max-width:900px}.andavis-modal .modal-wrapper.large,.andavis-modal .modal-wrapper.large .modal-body{min-width:980px;max-width:980px}.andavis-modal .modal-wrapper.extra-large,.andavis-modal .modal-wrapper.extra-large .modal-body{width:80vw;min-width:1270px}.andavis-modal .modal-wrapper.min-height{height:80%}.andavis-modal .modal-wrapper.height-auto>*{height:auto !important;min-height:87px !important}.modal .suggestions{position:relative !important}.modal .footer{margin-top:15px;display:flex;justify-content:space-between}body.modal-open .modal-scrollable .modal#divProd{margin:auto !important;margin-left:inherit;margin-top:2vh !important}.modal-header h1,.modal-header h2,.modal-header h3,.modal-header h4,.modal-header h5,.modal-header h6{margin:0}bs-modal-container .modal-dialog .modal-header{background-color:#343a40 !important;padding:14px 18px !important;top:0 !important}bs-modal-container .modal-dialog .modal-header .modal-title{color:rgba(255,255,255,0.9);font-size:1.14286rem}bs-modal-container .modal-dialog .modal-footer{display:block}bs-modal-container .modal-dialog .modal-footer button{float:right;margin-left:10px}\n  "],
                    inputs: ['visible', 'headline', 'height']
                },] },
    ];
    /** @nocollapse */
    Modal.propDecorators = {
        "target": [{ type: Input },],
        "size": [{ type: Input },],
        "close": [{ type: Output },],
        "open": [{ type: Output },],
    };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=modal.component.js.map