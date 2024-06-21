import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { MsgsService } from 'src/app/shared/services/msgs.service';
import { VOCAController, CdcategoryDto } from '../../services/Tickets.service';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  categoryTree: TreeNode[] = [];
  selectedNode: TreeNode = {} as TreeNode


  constructor(private vOCAController: VOCAController, private spinner: SpinnerService, private msg: MsgsService) { }
  ngOnInit(): void {
    this.spinner.show('')
    this.getAllCategories()
  }
  getAllCategories() {
    this.vOCAController.getAllCategories()
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.isSuccess) {
            this.populateTree(res.data as CdcategoryDto[])
          }
          else {
            let errors = "";
            console.log('res', res);
            res.errors.forEach(e => {
              errors += e.message + '\n';
            });
            this.msg.msgError('Error', '<h5>' + errors + '</h5>', true)
          }
        },
        error: (error) => {
          this.spinner.hide();
          this.msg.msgError('Error', '<h5>' + error.error + '</h5>', true)
        },
        complete: () => {
          this.spinner.hide();
        }
      })
  }
  populateTree(categories: CdcategoryDto[]) {
    categories.forEach(item => {
      let _item: TreeNode = { key: item.catId.toString(), label: item.catName, children: [] }
      let _node = this.getAnyNode(item.catParent.toString(), this.categoryTree)
      if (_node != undefined) {
        _node.selectable = false;
        _node?.children?.push(_item)
      }
      else
        this.categoryTree.push(_item)
    })
    this.categoryTree[0].expanded = true;
  }
  getAnyNode(key: string, nodes: TreeNode[]): TreeNode | undefined {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getAnyNode(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
    return undefined;
  }

  nodeSelection(event: any) {
    //this.selectedNode = event.node
    //  this.setIds(event.node.label)
  }

  nodeUnselection(event: any) {
    // this.setIds(event.node.label)
  }

}
