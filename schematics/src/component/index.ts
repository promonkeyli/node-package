import { Rule, SchematicContext, Tree, mergeWith, applyTemplates, apply, url  } from '@angular-devkit/schematics';
import {Schema} from "./schema";
import {strings} from "@angular-devkit/core";

export function component(_options: Schema): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        return mergeWith(apply(url('./files'), [
            applyTemplates({
                ...strings,
                name: _options.name
            })
        ]))(tree, _context);
    };
}