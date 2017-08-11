import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'

import { JQ_TOKEN } from './toastr.service'

declare let $: any;
@Directive({
    selector: `[modal-trigger]`
})
export class ModalTriggerDirective implements OnInit {

    @Input('modal-trigger') modalId: string;
    private el: HTMLElement;

    constructor(ref: ElementRef
        , @Inject(JQ_TOKEN) private $: any
    ) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        console.log('modaltrigger directive')
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
            // jQuery('#simple-modal');
            // $('#simple-modal').modal({});
        });
    }
}



