"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog';

import { usechecklist } from '@/hooks/use-checklist-modal';

interface ModalProps {
    
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const ChecklistModal: React.FC<ModalProps> = ({
   
    isOpen,
    onClose,
    children
}) => {

    const sessiondata = usechecklist();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open={sessiondata.isOpen} onOpenChange={sessiondata.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Checklist</DialogTitle>
                    <DialogDescription>
                    <ol className="list-decimal p-2">
                        <li>Use Gate 4 to enter. Gate-4 is located on the backside of the campus next to the parking facility (MLCP). You can also use Gate-1, just in front of Kundalahalli Metro.</li>
                        <li>Here is the exact location for Gate 4: <a className="decoration-blue-500 underline underline-offset-auto text-blue-600" href="https://goo.gl/maps/9kHzt9qpNMSpvhmB7">Gate-4 Location</a>
                        </li><li>Park your vehicles in MLCP as directed by security.
                        </li><li>Proceed to BLR05 building for the registration.
                        </li><li>Do not forget to bring your Company ID card or government authorized ID card.
                        </li><li>Note that the registrations start sharp at 8 AM. We recommend you be at the venue by 8 AM so you could network and have conversations with the attendees and speakers.
                        </li><li>The venue spans across buildings BLR05 Ground Floor and First Floor. There will be volunteers to guide you throughout the event. Please feel free to navigate from one session to another regardless of the track.
                        </li><li>Please bring your own water bottles. Water will be available in plenty for refilling your water bottles.
                        </li><li>During your sojourn in the SAP Labs campus, please help us keep the SAP Labs campus clean and green.
                        </li><li>Please keep your phone silent while you attend sessions.
                        </li><li>Post on social media (LinkedIn & Twitter) with the hashtags #sapcommunity #sapinsidetrack and #sitBLR. Watch out for the social media contest and win exciting prizes.
                        </li><li>Please wear your badges at all times.
                        </li><li>Please do not leave your belongings unattended at any point in time. Any loss of your belongings will not be SAP’s responsibility.
                        </li></ol>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ChecklistModal;
