import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Document } from './document.model';

import 'rxjs/add/observable/of';

@Injectable()
export class DocumentService {

  mockDocuments: Document[] = [
    {
      name: 'Check 3311 from CHEF-CO DISTRIBUTION INC for Invoice 1211 in the amount of $4,000.00',
      typeId: 1
    },
    {
      name: 'Check 1327 from MAXIMUM BURGER CO for Invoice 1547 in the amount of $3,000.00',
      typeId: 1
    },
    {
      name: 'Check 3618 from CHEF-CO DISTRIBUTION INC for Invoice 1652 in the amount of $4,000.00',
      typeId: 1
    },
    {
      name: 'Check 2176 from RESTFUL INN INC for Invoice 1378 in the amount of $920.00',
      typeId: 1
    },
    {
      name: 'Cover Letter for JOHN MALLORY (Applicant #1987)',
      typeId: 2
    },
    {
      name: 'Cover Letter for ANDREW LINCOLN (Applicant #1968)',
      typeId: 2
    },
    {
      name: 'Cover Letter for MARY NELSON (Applicant #7894)',
      typeId: 2
    },
    {
      name: 'Cover Letter for JANE HARPER (Applicant #6789)',
      typeId: 2
    },
    {
      name: 'Cover Letter for JASON KNIGHT (Applicant #9987)',
      typeId: 2
    },
  ];


  getDocumentsByTypeId(documentTypeId: number): Observable<Document[]> {
    return Observable.of(this.mockDocuments.filter(d => d.typeId === documentTypeId));
  }
}
