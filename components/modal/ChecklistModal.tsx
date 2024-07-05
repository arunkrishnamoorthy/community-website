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
    track: string;
    tracktitle: string;
    sessionno: string;
    session: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const ChecklistModal: React.FC<ModalProps> = ({
    track,
    tracktitle,
    session,
    sessionno,
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
                    <ol className="list-decimal p-2 text-left">
                        <li>Use Gate 1 (Kundalahalli Metro) <a target="_blank" className="decoration-blue-500 underline underline-offset-auto text-blue-600" href="https://maps.app.goo.gl/g1J6SPdK6Mt3ZamK7">(Location)</a> or Use Gate 4 <a target="_blank" className="decoration-blue-500 underline underline-offset-auto text-blue-600" href="https://goo.gl/maps/9kHzt9qpNMSpvhmB7">(Location)</a> to enter, located on the backside of the campus next to the parking facility (MLCP).</li>
                        <li>Park your vehicles in MLCP as directed by security.
                        </li><li>Proceed to BLR05 building for the registration.
                        </li><li>Do not forget to bring your Company ID card or government authorized ID card.
                        </li><li>Note that the registrations start sharp at 7:30 AM. We recommend you be at the venue by 7:30 AM so you could network with attendees, speakers and also visit <span className='font-semibold'>Meet AI Experts Zone</span>.
                        </li><li>There will be volunteers to guide you throughout the event. Please feel free to navigate from one session to another regardless of the track.
                        </li><li>Please bring your own water bottles. Water will be available in plenty for refilling your water bottles.
                        </li><li>During your sojourn in the SAP Labs campus, please help us keep the SAP Labs campus clean and green.
                        </li><li>Please keep your phone silent while you attend sessions.
                        </li><li>Post on social media (LinkedIn & Twitter) with the hashtags #sapcommunity #sapinsidetrack and #sitBLR. Watch out for the social media contest and win exciting prizes at the end of the day.
                        </li><li>Please wear your badges at all times and do not leave your belongings unattended at any point in time. Any loss of your belongings will not be SAP’s responsibility.
                        </li></ol>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ChecklistModal;
